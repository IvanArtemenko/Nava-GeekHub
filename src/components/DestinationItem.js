import React from "react";
import boatIcon from "../assets/img/sailboat.svg";

const DestinationItem = props =>
    <div className={"col-xs-12 col-sm-"+(props.cols)}>
        <div className="destination-item">
            <div className="mask">
                <img src={props.img} alt="img"/>
            </div>
            <button className="btn btn-transparent-red">
                <img src={boatIcon} alt="icon" />{props.boats}
            </button>
            <div className="destination-desc">
                <a href="#">{props.city}</a>
                <p>{props.country}</p>
            </div>
        </div>
    </div>;

export default DestinationItem;