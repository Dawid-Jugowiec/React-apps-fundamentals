import React, { Component } from 'react';
import './App.css';



const data = [

  {
    id: 1, title: 'Message 1', body: 'Content of message 1'
  },
  {
    id: 2, title: 'Message 2', body: 'Content of message 2'
  }
]

setInterval(() => {

  const index = data.length + 1;
  data.push({
    id: index,
    title: `Message ${index}`,
    body: `Content of message ${index}`
  })
  console.log(data);

}, 5000)

class App extends Component {

  state = {

    comments: [...data]
  }


  getData = () => {
    if (this.state.comments.length !== data.length) {
      this.setState({
        comments: [...data]
      })
    }
    else {
      console.log('Takie same dane. Nie aktualizuje')
    }
  }

  componentDidMount() {
    this.idI = setInterval(this.getData, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.idI)
  }

  render() {
    const comments = this.state.comments.map(comment => (<div key={comment.id}>
      <h4>{comment.title}</h4>
      <div>{comment.body}</div>

    </div >))
    return (
      <div className="App">
        {comments.reverse()}
      </div>

    );
  }
}

export default App;
