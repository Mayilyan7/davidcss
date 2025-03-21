import React from 'react';
import './Header.scss';
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="#">
                            Lessons
                            <div className={'page'}>
                                <Link className={'pageLink'} to="/">Lesson 1</Link>
                                <Link className={'pageLink'} to="/position">Lesson 2</Link>
                                <Link className={'pageLink'} to="/lesson2">Lesson 3</Link>
                                <Link className={'pageLink'} to="/lesson3">Lesson 4</Link>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;