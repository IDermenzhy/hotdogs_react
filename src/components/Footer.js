import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Footer extends Component {

    render() {
        return (
            <footer>
                <div className = 'all-rigts'>
                    <span>® 2016 Dirty Dogs all rights reserved</span>
                </div>
                <div className = 'info'>
                    <span>274 Marconi Blvd. Columbus, Ohio 43215      </span>
                    <span className = 'middle-info'>614.538.0095</span>
                    <span><Link to = '/contact' >Contact us</Link></span>
                </div>
            </footer>
        )
    }

}

export default Footer;