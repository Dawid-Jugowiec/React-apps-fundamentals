import React from 'react';

const Form = ({ value, change, submit }) => {
    return (

        <form onSubmit={submit}>

            <input type="text" value={value} placeholder="Write the city name" onChange={change} />
            < button > Search for city</button>
        </form>
    );
}

export default Form;