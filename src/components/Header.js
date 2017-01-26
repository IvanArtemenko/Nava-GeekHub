import React from "react";
import { Link } from "react-router";
import Logo from "../assets/img/logo.png";

const Header = () =>
    <header className="main-header">
        <div className="site-logo pull-left">
            <a href="/">
                <img src={Logo} alt="img" />
            </a>
        </div>
        <div className="header-navigation pull-right">
            <ul className="list-inline text-uppercase">
                <li>
                    <Link to="#">Top destinations</Link>
                </li>
                <li>
                    <Link to="#">Add your boat</Link>
                </li>
                <li>
                    <a href="#" className="btn btn-transparent-white">Sign up</a>
                </li>
            </ul>
        </div>
    </header>;

export default Header;