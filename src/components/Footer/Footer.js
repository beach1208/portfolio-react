import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../sass/app.scss";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <ul className="footer__sns-list">
                    <li className="footer__sns-icon">
                        <a href="mailto:nagisa.kojima9128@gmail.com">
                            <FontAwesomeIcon icon="envelope"/>
                        </a>
                    </li>
                    <li className="footer__sns-icon">
                        <a href="https://www.linkedin.com/in/nagisa-kojima-703209144/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={["fab","linkedin"]}/>
                        </a>
                    </li>
                    <li className="footer__sns-icon">
                        <a href="https://github.com/beach1208" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={["fab","github"]}/>
                        </a>
                    </li>
                    <li className="footer__sns-icon">
                        <a href="https://dribbble.com/beach1208" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={["fab","dribbble"]}/>
                        </a>
                    </li>
                </ul>
                <p className="footer__text">
                    &copy; Nagisa Kojima 2020
                </p>
            </div>
        </div>
    )
}

export default Footer;