import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {

    return (
        <ul>
            <li>
                <Link
                    to="/"
                    className="navigation-link"
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to="/modeler"
                    className="navigation-link"
                >
                    Modeler
                </Link>
            </li>
            <li>
                <Link
                    to="/frameworks"
                    className="navigation-link"
                >
                    Frameworks
                </Link>
            </li>
        </ul>
    );
}


export default Navigation;