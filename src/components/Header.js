import React, {Component} from 'react';


class Header extends Component {

    render() {
        return (
            <header>
                <div className="row">
                    <div className="header-hotdog"><img src={ require("../img/photo1.png")} alt="alt" /></div>
                    <div className="header-hotdog"><img src={ require("../img/photo2.png")} alt="alt" /></div>
                    <div className="header-hotdog"><img src={ require("../img/photo3.png")} alt="alt" /></div>
                    <div className="header-hotdog"><img src={ require("../img/photo4.png")} alt="alt" /></div>
                    <div className="header-hotdog"><img src={ require("../img/photo5.png")} alt="alt" /></div>
                    <div className="header-hotdog"><img src={ require("../img/photo6.png")} alt="alt" /></div>
                </div>
                <div className="row">
                    <div className="header-hotdog"><img src = { require ("../img/photo7.png")} alt="alt" /></div>
                    <div className="header-hotdog"><img src = { require ("../img/photo8.png")} alt="alt" /></div>
                    <div className="header-hotdog"><img src = { require("../img/photo9.png")} alt="alt" /></div>
                    <div className="header-hotdog"><img src = { require("../img/photo10.png")} alt="alt" /></div>
                    <div className="header-hotdog"><img src = { require("../img/photo11.png")} alt="alt" /></div>
                    <div className="header-hotdog"><img src = { require("../img/photo12.png")} alt="alt" /></div>
                </div>
                <div className="insta-tag">
                    <img src = { require ("../img/Instagram.png")} alt="alt" />
                    <span>#hotdogs</span>
                </div>
            </header>
        )
    }
}

export default Header;




