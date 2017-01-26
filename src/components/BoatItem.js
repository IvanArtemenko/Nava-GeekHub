import React from "react";
import mapIcon from "../assets/img/map.png";
import accountIcon from "../assets/img/account.png";

const BoatItem = props =>
    <div className={"col-xs-12 col-sm-"+(props.cols)}>
        <div className="boat-item">
            <div className="mask">
                <img src={props.img} alt="img"/>
            </div>
            <button className="btn btn-transparent-red">
                {`$${props.price} /day`}
            </button>
            <div className="boat-desc">
                <a href="#">{props.name}</a>
                <span><img src={mapIcon} alt="icon"/>{props.city}</span>
                <span><img src={accountIcon} alt="icon"/>{`${props.berths} Berths`}</span>
            </div>
        </div>
    </div>;

export default BoatItem;