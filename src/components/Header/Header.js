import React from "react";
import { Link } from "react-router-dom";
import "../../sass/app.scss";
function Header() {
    return (
        <div className="header">
            <div className="container">
                <h1 className="header__logo"><Link className="header__logo-link" to="/">NK</Link></h1>
                <nav className="header__nav">
                    <Link to="/" className="header__nav-link">Work</Link>
                    <Link to="/about" className="header__nav-link">About</Link>
                    <Link to="/contact" className="header__nav-link">Contact</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header;