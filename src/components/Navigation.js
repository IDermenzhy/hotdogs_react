import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Nav extends Component {
    render() {
        return(
            <nav>
                    <div className="ul-container">
                        <ul>
                            <li><Link to = '/' className="menu-link" >menu</Link></li>
                            <li><a href='#' className="menu-link">catering</a></li>
                            <li><a href='#' className="menu-link">about us</a></li>
                            <li><Link to = '/contact' className="menu-link">contact</Link></li>
                        </ul>

                    </div>

            </nav>
        )
    }
}

export default Nav;