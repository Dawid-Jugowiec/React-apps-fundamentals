import React, { Component } from 'react';
import './App.css';
import Word from './Words'



class App extends Component {

  state = {
    words: [],
    isLoaded: false/*AJAX promise status*/
  }

  componentDidMount() {
    setTimeout(this.fetchData, 1000)


  }

  fetchData = () => {
    fetch('data/words.json')
      .then(response => response.json())
      .then(data => {

        this.setState({
          words: data.words,
          isLoaded: true
        })
      })
  }

  render() {

    const words = this.state.words.map(word => (<Word key={word.id} english={word.en} polish={word.pl} />))

    return (
      <ul className="App">
        {this.state.isLoaded ? words : "Wczytuję dane"}
      </ul>
    );
  }
}

export default App;

