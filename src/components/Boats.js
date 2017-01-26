import React from "react";
import BoatItem from "./BoatItem";
import LoadMore from "./LoadMore";
import Delphia from "../assets/img/delphia.png";
import Sense from "../assets/img/sence.png";
import Crusier51 from "../assets/img/crusier-51.png";
import Crusier41s from "../assets/img/cruiser-41s.png";

const boats = [
    {
        cols: 6,
        name: "Delphia 47",
        city: "Gdańsk, Poland",
        berths: 8,
        price: 580,
        img: Delphia
    },
    {
        cols: 6,
        name: "Sense 55",
        city: "Portofino, Italy",
        berths: 12,
        price: 950,
        img: Sense
    },
    {
        cols: 6,
        name: "Crusier 51",
        city: "Palma de Mallorca, Spain",
        berths: 10,
        price: 820,
        img: Crusier51
    },
    {
        cols: 6,
        name: "Crusier 41s",
        city: "Lisbon, Portugal",
        berths: 8,
        price: 400,
        img: Crusier41s
    },

];

class Boats extends React.Component {
    constructor() {
        super();
        this.state = {
            infiniteData: [],
            message: "Load more boats"
        }
    }

    loadData() {
        let loadItems = boats.concat(this.state.infiniteData);
        this.setState({
            message: "Loading..."
        });
        setTimeout(() => {
            this.setState({
                infiniteData: loadItems,
                message: "Load more boats"
            });
        }, 500);
    }

    render() {
        return (
            <section className="boats-section">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2>Featured boats</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                        </div>
                    </div>
                    <div className="row">
                        {boats.map((props, i) =>
                            <BoatItem
                                key={i}
                                cols={props.cols}
                                name={props.name}
                                berths={props.berths}
                                city={props.city}
                                price={props.price}
                                img={props.img}
                            />)}
                    </div>
                    <div className="row">
                        {this.state.infiniteData.map((data, i) =>
                            <BoatItem
                                key={i}
                                cols={data.cols}
                                name={data.city}
                                berths={data.boats}
                                city={data.cols}
                                price={data.price}
                                img={data.img}
                            />)}
                    </div>
                    <LoadMore
                        onLoadData={this.loadData.bind(this)}
                        message={this.state.message}
                    />
                </div>
            </section>
        );
    }
}

export default Boats;