import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    username: "",
    useremail: "",
    userpassword: "",
    accept: false,
    message: '',

    errors: {
      username: false,
      useremail: false,
      userpassword: false,
      accept: false,


    }

  }

  messages = {

    username_incorrect: 'Word must have at least 10 letters and do not include free spaces',
    useremail_incorrect: 'Brak @ w emailu',
    userpassword_incorrect: 'Password must have at least 8 letters',
    accept_incorrent: 'Invalid submit data'
  }




  handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;

    if (type === "text" || type === "password" || type === "email") {
      const value = e.target.value;
      this.setState({
        [name]: value

      })

    }

    else if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked

      })
    }



  }


  handleSubmit = (e) => {

    e.preventDefault();


    const validation = this.handleFormValidation();
    console.log(validation)


    if (validation.correct) {
      this.setState({


        username: "",
        useremail: "",
        userpassword: "",
        accept: false,
        message: "Formularz został wysłany",

        errors: {
          username: false,
          useremail: false,
          userpassword: false,
          accept: false,
        }

      })

      console.log('Form sent')
    }

    else (
      this.setState({
        errors: {
          username: !validation.username,
          useremail: !validation.useremail,
          userpassword: !validation.password,
          accept: !validation.accept,
        }
      })
    )

  }


  handleFormValidation = () => {

    let username = false;
    let useremail = false;
    let password = false;
    let accept = false;
    let correct = false;

    if (this.state.username.length > 10 && this.state.username.indexOf(' ') === -1) {
      username = true;
    }

    if (this.state.useremail.indexOf('@') !== -1) {
      useremail = true;
    }

    if (this.state.userpassword.length >= 8) {
      password = true;
    }

    if (this.state.accept) {
      accept = true;
    }

    if (username && useremail && password && accept === true) {
      correct = true;
    }

    return ({
      correct,
      username,
      useremail,
      password,
      accept
    })
  }

  componentDidUpdate() {
    if (this.state.message !== '') {

      setTimeout(() => {
        this.setState({
          message: ''
        })
      }, 3000)
    }
  }

  render() {

    return (
      <div className="App">

        <form onSubmit={this.handleSubmit} noValidate>        {/*noValide atrubute switches of  */}
          <label htmlFor="user">Your name:
            <input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange}>

            </input>
            {this.state.errors.username && <span>{this.messages.username_incorrect}</span>}
          </label>

          <label htmlFor="email">Your email address:
            <input type="email" id="email" name="useremail" value={this.state.useremail} onChange={this.handleChange}>

            </input>
            {this.state.errors.useremail && <span>{this.messages.useremail_incorrect}</span>}
          </label>


          <label htmlFor="password"> Your password
            <input type="text" id="password" name="userpassword" value={this.state.userpassword} onChange={this.handleChange}>

            </input>
            {this.state.errors.userpassword && <span>{this.messages.userpassword_incorrect}</span>}
          </label>

          <label htmlFor="accept"
          >
            <input type="checkbox" id="accept" name="accept" checked={this.state.accept} onChange={this.handleChange}>
            </input>Create account
              {this.state.errors.accept && <span>{this.messages.accept_incorrent}</span>}
          </label>

          <button>Zapisz się</button>

        </form>
        {this.state.message !== "" && <h3>Formularz został wysłany</h3>}
      </div>
    );
  }
}

export default App;
