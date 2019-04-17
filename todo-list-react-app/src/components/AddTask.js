

import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {

    minDate = new Date().toISOString().slice(0, 10);
    state = {
        text: '',
        checked: false,
        date: this.minDate
    }

    handleText = (e) => {

        this.setState({
            text: e.target.value
        })
    }

    handleCheckbox = (e) => {

        this.setState({
            checked: e.target.checked
        })
    }


    handleDateChange = (e) => {
        this.setState({
            date: e.target.value
        })

    }

    handleClick = () => {
        const { text, checked, date } = this.state;
        const add = this.props.add(text, date, checked);




        if (add) {

            this.setState({
                text: '',
                checked: false,
                date: this.minDate

            })
        }


    }

    render() {
        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        maxDate = maxDate + "-12-31";


        return (
            <div className=
                "form">

                <input placeholder="Add new task" value={this.state.text} onChange={this.handleText}></input>
                <input type='checkbox' checked={this.state.checked} id='important' onChange={this.handleCheckbox} />
                <label htmlFor="important">Pioritize</label>
                <label htmlFor="date" > Set Time limit</label>
                <input type='date' value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDateChange}></input>

                <button onClick={this.handleClick}>Add</button>

                <hr />
            </div>

        );
    }
}

export default AddTask;