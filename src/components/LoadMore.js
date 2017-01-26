import React from "react";

const LoadMore = props =>
    <button
        className="btn btn-transparent-gray text-uppercase"
        onClick={props.onLoadData}>
        {props.message}
    </button>;

export default LoadMore;