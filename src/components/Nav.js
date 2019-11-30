import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {

    let searchText = e => {
        props.onSearch(e.target.innerText);
    }

    return(
        <nav className="main-nav">
            <ul>
                <li><NavLink exact to={'/'} onClick={searchText}>Home</NavLink></li>
                <li><NavLink to={'/search/tree'} onClick={searchText}>Tree</NavLink></li>
                <li><NavLink to={'/search/jungle'} onClick={searchText}>Jungle</NavLink></li>
                <li><NavLink to={'/search/sunset'} onClick={searchText}>Sunset</NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;