import React from 'react';
import { NavLink } from 'react-router-dom'
import "../styles/Navigation.css"

const list = [{

    name: 'Home',
    path: '/',
    exact: true
},
{

    name: 'Product',
    path: '/products'
},
{

    name: 'Contact Us',
    path: '/contact'
},
{

    name: 'Administrator Panel',
    path: '/panel'
}]



const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))
    return (<div>


        <nav className="main">
            <ul>
                {menu}
            </ul>
        </nav>
    </div>);
}

export default Navigation;