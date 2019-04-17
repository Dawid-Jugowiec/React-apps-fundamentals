import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';

//klucz do API
const APIKey = "APPID=263ff37a30ca84a2f4523fc18f56de80";

class App extends Component {

  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: ""

  }

  handleInputChange = (e) => {

    this.setState({
      value: e.target.value
    })
  }



  handleCitySubmit = (e) => {
    e.preventDefault();

    const API = `http://api.openweather.org/data/2.5/weather?q=${this.state.value}&${APIKey}&units=metric`;

    fetch(API)
      .then(response => {
        if (response.ok) { return response } throw Error("Action failed")
      }
      )
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleString();

        this.setState(prevState => ({
          err: false,
          date: time,
          city: prevState.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
        }))
      })
      .catch(err => {
        console.log(err);
        this.setState(PrevState => ({
          err: true,
          city: PrevState.city
        }))
      })


  }

  /*Predicitn city names in input*/

  // componentDidUpdate(prevProps, prevState) {

  //   if (this.state.value.length < 2) return
  //   if (prevState.value !== this.state.value) {
  //     const API = `http://api.openweather.org/data/2.5/weather?q=${this.state.value}&${APIKey}&units=metric`;

  //     fetch(API)
  //       .then(response => {
  //         if (response.ok) { return response } throw Error("Action failed")
  //       }
  //       )
  //       .then(response => response.json())
  //       .then(data => {
  //         const time = new Date().toLocaleString();

  //         this.setState(prevState => ({
  //           err: false,
  //           date: time,
  //           city: prevState.value,
  //           sunrise: data.sys.sunrise,
  //           sunset: data.sys.sunset,
  //           temp: data.main.temp,
  //           pressure: data.main.pressure,
  //           wind: data.wind.speed,
  //         }))
  //       })
  //       .catch(err => {
  //         console.log(err);
  //         this.setState(PrevState => ({
  //           err: true,
  //           city: PrevState.city
  //         }))
  //       })

  //   }
  // }

  render() {
    return (
      <div className="app">
        <h1>Weather App</h1>
        <Form value={this.state.value} change={this.handleInputChange} submit={this.handleCitySubmit} />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
