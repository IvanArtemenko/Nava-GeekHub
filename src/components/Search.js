import React from "react";
import Autosuggest from "react-autosuggest";
import boatIcon from "../assets/img/sailboat.svg";
import axios from "axios";

const locations = [];

const getCountries = arr => {
    axios.get("https://restcountries.eu/rest/v1/all")
        .then(res => {
            for(let i in res.data){
                if(!res.data.hasOwnProperty(i)) continue;
                    arr.push(res.data[i]);
            }
        });
};


const searchInners = inputProps => (
    <div>
        <input {...inputProps} />
        <button className="btn btn-transparent-red text-uppercase">
            <img src={boatIcon} alt="icon" />Find your boat
        </button>
    </div>
);

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === "") {
        return [];
    }

    const regex = new RegExp("^" + escapedValue, "i");

    return locations.filter(location => regex.test(location.name));
}

function getSuggestionValue(suggestion) {
    return suggestion.name;
}

function renderSuggestion(suggestion) {
    return (
        <p>{suggestion.name}</p>
    );
}

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            value: "",
            suggestions: []
        };
    }

    componentDidMount() {
        this.input.focus();
        getCountries(locations);
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    storeInputReference = autosuggest => {
        if (autosuggest !== null) {
            this.input = autosuggest.input;
        }
    };

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: "What is your DESTINATION, SAILOR?",
            value,
            onChange: this.onChange
        };

        return (
            <div>
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                    renderInputComponent={searchInners}
                    ref={this.storeInputReference}
                />
            </div>
        );
    }
}

export default Search;