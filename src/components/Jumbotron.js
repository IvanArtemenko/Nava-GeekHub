import React from "react";

const Jumbotron = props =>
    <div className="section-jumbotron">
        <h1>{props.title}</h1>
        <p>{props.subTitle}</p>
    </div>;

export default Jumbotron;