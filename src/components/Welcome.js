import React from "react";
import Header from "./Header";
import Jumbotron from "./Jumbotron";
import Video from "../assets/video/welcome.mp4";
import Search from "./Search";

class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {
            title: true,
            subTitle: true
        }
    }

    updateText() {
        setInterval(() => {
            this.setState({
                title: !this.state.title,
                subTitle: !this.state.subTitle
            });
        }, 5000);
    }

    componentDidMount(){
        this.updateText();
    }

    render() {
        let title,
            subTitle;

        if (this.state.title === true) {
            title = "Reserve a boat now";
            subTitle = "And set your sails into paradise!";
        } else {
            title = "Explore our top destinations";
            subTitle = "Lorem ipsum dolor sit amet";
        }

        return(
            <section className="welcome-section">
                <div className="welcome-video">
                    <video loop muted autoPlay="autoPlay">
                        <source src={Video} />
                    </video>
                </div>
                <div className="container">
                    <div className="row">
                        <Header />
                        <Jumbotron title={title} subTitle={subTitle} />
                        <Search />
                    </div>
                </div>
            </section>
        );
    }
}

export default Welcome;