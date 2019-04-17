import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/Footer.css'

const Footer = () => {
    return (<div>

        <h2>Footer</h2>
        <Route path="/" exact render={(props) => (<p>You are on homepage</p>)

        } />


        <Route path="/:page" exact render={(props) => {
            return (<p>You are <span>on {props.match.params.page}</span></p>);
            // return (<p>You are <span>on {props.match.url}</span></p>);
            // return (<p>You are <span>on {props.match.path}</span></p>);

        }} />

        <Route path="/:page/:idproduct" exact render={(props) => {
            return (<p>You are <span>on {props.match.params.idproduct}</span></p>);
            // return (<p>You are <span>on {props.match.url}</span></p>);
            // return (<p>You are <span>on {props.match.path}</span></p>);

        }} />

    </div>);
}

export default Footer;