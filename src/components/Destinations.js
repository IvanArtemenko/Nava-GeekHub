import React from "react";
import Panel from "./Panel";
import DestinationItem from "./DestinationItem";
import LoadMore from "./LoadMore";
import Figueria from "../assets/img/figueira.png";
import Ibiza from "../assets/img/Ibiza.png";
import Palma from "../assets/img/Palma.png";
import Portofino from "../assets/img/Portofino.png";
import Hercules from "../assets/img/Hercules.png";
import Modal from "./Modal";

const items = [
    {
        country: "Portugal",
        city: "Figueira da Foz",
        boats: 730,
        cols: 8,
        img: Figueria
    },
    {
        country: "Spain",
        city: "Ibiza",
        boats: 621,
        cols: 4,
        img: Ibiza
    },
    {
        country: "Spain",
        city: "Palma de Mallorca",
        boats: 543,
        cols: 4,
        img: Palma
    },
    {
        country: "Italy",
        city: "Portofino",
        boats: 495,
        cols: 4,
        img: Portofino
    },
    {
        country: "Monaco",
        city: "Port Hercules",
        boats: 402,
        cols: 4,
        img: Hercules
    },
];

class Destinations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infiniteData: [],
            message: "Explore more destinations",
            isOpen: null,
            selected: false
        }
    }

    loadData() {
        let loadItems = items.concat(this.state.infiniteData);
        this.setState({
            message: "Loading..."
        });
        setTimeout(() => {
            this.setState({
                infiniteData: loadItems,
                message: "Explore more destinations"
            });
        }, 500);
    }

    handleClick = city => () => {
        this.setState({
            selected: city,
            isOpen: !this.state.isOpen
        });
    };

    closeModal() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {

        let state;

        if (this.state.isOpen === true) {
            state = this.state.isOpen ? "shown" : "";
        }

        return (
            <section className="destinations-section">
                <div className="container">
                    <div className="row">
                        <Panel />
                        <div className="section-title">
                            <h2>Explore our top destinations</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                        </div>
                        <div className="row-fluid">
                            {items.map((prop, i) =>
                                <DestinationItem
                                    key={i}
                                    country={prop.country}
                                    city={prop.city}
                                    boats={prop.boats}
                                    cols={prop.cols}
                                    img={prop.img}
                                    onHandleClick={this.handleClick(prop.city)}
                                />)}
                            {items.map((data, i) =>
                                <Modal
                                    key={i}
                                    city={this.state.selected}
                                    state={state}
                                    onCloseModal={this.closeModal.bind(this)}
                                />
                            )};
                        </div>
                        <div className="row-fluid">
                            {this.state.infiniteData.map((data, i) =>
                                <DestinationItem
                                    key={i}
                                    country={data.country}
                                    city={data.city}
                                    boats={data.boats}
                                    cols={data.cols}
                                    img={data.img}
                                    onHandleClick={this.handleClick(data.city)}
                                />)}
                            {items.map((data, i) =>
                                <Modal
                                    key={i}
                                    city={this.state.selected}
                                    state={state}
                                    onCloseModal={this.closeModal.bind(this)}
                                />
                            )};
                        </div>
                        <LoadMore
                            onLoadData={this.loadData.bind(this)}
                            message={this.state.message}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default Destinations;