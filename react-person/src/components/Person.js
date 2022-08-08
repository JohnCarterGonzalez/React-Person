import React, { useState } from 'react';

const Person = (props) => {

    const { firstName, lastName, age, hairColor } = props
    const [count, setCount] = useState(age);

    const ageClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{ lastName }, { firstName }</h1>
            <p>Age: { count }</p>
            <p>Hair Color: { hairColor }</p>
            <button onClick={ ageClick }> Birthday button for { firstName } { lastName }</button>
        </div>
    )
}
export default Person;
