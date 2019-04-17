import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

    if (active.length >= 2) {

        active.sort((a, b) => {

            a = a.text.toLowerCase();
            b = b.text.toLowerCase();
            if (a > b)
                return 1;
            if (a < b)
                return -1;
            else
                return 0;


        })
    }


    if (done.length >= 2) {
        done.sort((a, b) => b.finishDate - a.finishDate)
    }
    const activeTasks = active.map(task => (<Task key={task.id} task={task} delete={props.delete} change={props.change} />))
    const doneTasks = done.map(task => (<Task key={task.id} task={task} delete={props.delete} change={props.change} />))




    return (
        <>
            <div className="active">
                <h1>Tasks to do</h1>
                <h3>
                    {activeTasks.length > 0 ? activeTasks : "All tasks finished. Have a nice day"}

                </h3>
            </div>
            <hr />

            <div className="done">
                <h2><em>Tasks done {doneTasks.length}</em></h2>
                <h3>

                    {doneTasks.length > 5 && <span style={{ fontSize: '10px', color: 'red' }}>Only last 5 finished quests are shown</span>}
                    {doneTasks.length > 5 ? doneTasks.slice(doneTasks.length - 5) : doneTasks}

                </h3>
            </div>
        </>

    );
}

export default TaskList;