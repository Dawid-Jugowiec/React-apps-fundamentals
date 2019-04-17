import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';


class App extends Component {

  counter = 9;
  state = {
    tasks: [{

      id: 0,
      text: 'zagrać wreszcie w Wiedźmina 3',
      date: '2018-02-15',
      important: true,
      active: true,
      finishDate: null,

    }, { id: 1, text: "zrobić dobry uczynej", date: '2020-11-12', important: false, active: true, finishDate: null },
    { id: 2, text: "pomalować dom po sylwestrze", date: '2019-09-11', important: false, active: true, finishDate: null },
    { id: 3, text: "schudnąć 30 kilogramów", date: '2019-05-20', important: true, active: true, finishDate: null },
    { id: 4, text: "sprzedać butelki po piwie (20 skrzynek)", date: '2020-11-12', important: false, active: true, finishDate: null },
    { id: 5, text: "jeszcze raz pomalować dom", date: '2019-09-11', important: false, active: true, finishDate: null },
    { id: 6, text: "fryzjer!!!", date: '2019-05-20', important: true, active: true, finishDate: null },
    { id: 7, text: "nie odbierać poleconego od komornika", date: '2020-11-12', important: false, active: true, finishDate: null },
    { id: 8, text: "kupić 2 butelki litrowe", date: '2019-09-11', important: false, active: true, finishDate: null },],

  }

  deleteTask = (id) => {
    console.log("Deleted Task o id: " + id)
    const tasks = [...this.state.tasks];

    const index = tasks.findIndex(task =>
      task.id === id

    );

    tasks.splice(index, 1);


    // let tasks = this.state.tasks.concat();
    // tasks = tasks.filter(task => task.id !== id);


    this.setState(
      { tasks: tasks }
    )

  }

  changeTaskStatus = (id) => {
    console.log("Changed Task o id: " + id)

    let tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {

        task.active = false;
        task.finishDate = new Date().getTime()
        console.log(task.finishDate)
      }
    }

    )
    this.setState({
      tasks
    })

  }


  AddTask = (text, date, important) => {
    if (text.length > 0) {
      const task = {
        id: this.counter,
        text,
        date,
        important,
        active: true,
        finishDate: null,

      }
      this.counter++;

      this.setState(prevState => ({
        tasks: [...prevState.tasks, task],


      }))


      return true;
    }
    else
      return false;
  }

  render() {
    return (
      <div className="App">

        <AddTask add={this.AddTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
