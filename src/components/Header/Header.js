import React from "react";
import { Link } from "react-router-dom";
import "../../sass/app.scss";
function Header() {
    return (
        <div className="header">
            <div className="wrapper">
                <h1 className="header__logo"><Link to="/">NK</Link></h1>
                <nav className="header__nav">
                    <Link to="/" className="header_nav">Work</Link>
                    <Link to="/about" className="header_nav">About</Link>
                    <Link to="/contact" className="header_nav">Contact</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header;