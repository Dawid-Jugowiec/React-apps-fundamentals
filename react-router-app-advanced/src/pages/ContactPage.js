import React, { Component } from 'react';
import '../styles/ContactPage.css';
import { Prompt } from 'react-router-dom';


class ContactPage extends Component {

    state = {
        value: "",
        isEmpty: true
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            value: "",
            isEmpty: true

        })

    }

    handleChange = (e) => {

        if (e.target.value.length > 0) {
            this.setState({
                value: e.target.value,
                isEmpty: false
            })
        }

        else {
            this.setState({
                value: e.target.value,
                isEmpty: true
            })

        }

    }
    render() {
        return (<div className="contact">
            <form onSubmit={this.handleSubmit}>
                <h3>Napisz do nas</h3>
                <textarea value={this.state.value} onChange={this.handleChange}></textarea>
                <button>Wyślij</button>
            </form>
            <Prompt
                when={!this.state.isEmpty}
                message='Your form is incomplete. Not saved changes will be lost'
            />
        </div >);
    }
}

export default ContactPage;