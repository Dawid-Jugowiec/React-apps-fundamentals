import React, { Component } from 'react';
import UsersList from './UsersList';
import ButtonFetchUsers from './ButtonFetchUsers'

import './App.css';


const API = `https://randomuser.me/api/?results=1`

class App extends Component {

  state = {

    users: []
  }

  handleDataFetch = () => {
    // console.log('Click')

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error(response.status)
      })
      .then(response => response.json())
      .then(data => {
        const user = data.results;
        this.setState(prevState => ({
          users: prevState.users.concat(user)
        }))
      })
      .catch(error => console.log(error + "coś nie tak"))

  }

  render() {
    const users = this.state.users;
    return (
      <div className="App">
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users.length > 0 ? <UsersList users={users} /> : users}
      </div>
    );
  }
}

export default App;
