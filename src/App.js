import React from 'react';
import Welcome from "./components/Welcome";
import Destinations from "./components/Destinations";
import OwnBoat from "./components/ownBoat";
import Boats from "./components/Boats";
import Footer from "./components/Footer";

class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome />
                <Destinations />
                <OwnBoat />
                <Boats />
                <Footer />
                {this.props.children}
            </div>
        );
    }
}

export default App;