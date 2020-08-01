import React from "react";
import { Link } from "react-router-dom";
import "../../sass/app.scss";

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = { language: false }
    }
    handleClick = () => {
        this.setState(state => ({
          language: !state.language
        }));
    }
    
    render() {
        console.log(this.state.language)
        return (
            <div className="header">
                <div className="container">
                    <div className="header__logo"><Link className="header__logo-link" to="/">Nagisa.K</Link></div>
                    <nav className="header__nav">
                        <Link to="/" className="header__nav-link">Work</Link>
                        <Link to="/about" className="header__nav-link">About</Link>
                        <Link to="/contact" className="header__nav-link">Contact</Link>
                        <button value={this.state.language} onClick={this.handleClick}>JPN</button>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header;