import React from "react";

const Modal = props =>
    <div className={"modal-window "+(props.state)}>
        <button
            className="btn btn-transparent-red"
            onClick={props.onCloseModal}>
            &#x2716;
        </button>
        <h1>{props.city}</h1>
        <div className="modal-description">
            <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam quam veniam voluptatem. Blanditiis, consectetur consequuntur
                corporis culpa cupiditate debitis deserunt dolorem dolores eaque laborum libero,
                minus praesentium qui, sequi tempore.
            </p>
            <button className="btn btn-transparent-gray">Buy trip</button>
        </div>
    </div>;

export default Modal;