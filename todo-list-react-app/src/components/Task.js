import React from 'react';

const Task = (props) => {
    const style = {
        color: 'red'
    }
    const { text, date, id, active, important, finishDate } = props.task;

    if (active) {
        return (<div>
            <p><strong style={important ? style : null}>{text}</strong>
                - do <span>{date}</span>
                <button onClick={() => props.change(id)}>Zostało zrobione</button>
                <button onClick={() => props.delete(id)}>X</button>
            </p>

        </div >);
    }
    else {
        const finish = new Date(finishDate).toLocaleString();
        return (<div>
            <p><strong style={important ? style : null}>{text}</strong>
                - do <span>{date}</span><span> The task was finished on {finish}</span>

                <button onClick={() => props.delete(id)}>X</button>
            </p>
        </div>
        )
    }

}

export default Task;