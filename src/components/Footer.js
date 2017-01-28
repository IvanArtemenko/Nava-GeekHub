import React from "react";
import FacebookIcon from "../assets/img/facebook.png";
import TwitterIcon from "../assets/img/twitter.png";
import GoogleIcon from "../assets/img/google-plus.png";

const Footer = () =>
    <footer className="main-footer">
        <div className="container">
            <div className="row">
                <div className="footer-item">
                    <p>Top locations</p>
                    <ul className="list-unstyled">
                        <li>
                            <a href="#">Lorem ipsum dolor</a>
                        </li>
                        <li>
                            <a href="#">Lorem ipsum dolor</a>
                        </li>
                        <li>
                            <a href="#">Lorem ipsum dolor</a>
                        </li>
                        <li>
                            <a href="#">Lorem ipsum dolor</a>
                        </li>
                        <li>
                            <a href="#">Lorem ipsum dolor</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-item">
                    <p>Featured boats</p>
                    <ul className="list-unstyled">
                        <li>
                            <a href="#">Lorem ipsum dolor</a>
                        </li>
                        <li>
                            <a href="#">Lorem ipsum dolor</a>
                        </li>
                        <li>
                            <a href="#">Lorem ipsum dolor</a>
                        </li>
                        <li>
                            <a href="#">Lorem ipsum dolor</a>
                        </li>
                        <li>
                            <a href="#">Lorem ipsum dolor</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-item">
                    <p>Subscribe to our newsletter</p>
                    <form action="#">
                        <input type="email" placeholder="Your email adress" />
                        <button className="btn btn-transparent-red text-uppercase">&#x2714;</button>
                    </form>
                    <ul className="footer-social list-inline">
                        <li>
                            <a href="#"><img src={FacebookIcon} alt="icon"/></a>
                        </li>
                        <li>
                            <a href="#"><img src={TwitterIcon} alt="icon"/></a>
                        </li>
                        <li>
                            <a href="#"><img src={GoogleIcon} alt="icon"/></a>
                        </li>
                    </ul>
                </div>
                <div className="footer-item">
                    <p>Contact us</p>
                    <ul className="list-unstyled">
                        <li>
                            <a href="#">Lorem ipsum dolor</a>
                        </li>
                        <li>
                            <a href="#">Lorem ipsum dolor</a>
                        </li>
                        <li>
                            <a href="#">Lorem ipsum dolor</a>
                        </li>
                        <li>
                            <a href="#">Lorem ipsum dolor</a>
                        </li>
                        <li>
                            <a href="#">Lorem ipsum dolor</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>;

export default Footer;