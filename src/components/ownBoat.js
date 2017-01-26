import React from "react";
import Background from "../assets/img/your-boat.png";
import Jumbotron from "./Jumbotron";

const OwnBoat = () =>
    <section className="ownboat-section">
        <div className="mask">
            <img src={Background} alt="img"/>
        </div>
        <div className="container">
            <div className="row">
                <Jumbotron
                    title="Have your own boat?"
                    subTitle="navigare necesse est, vivere non est necesse" />
                <button className="btn btn-transparent-red text-uppercase">Make money with your boat</button>
            </div>
        </div>
    </section>
;

export default OwnBoat;