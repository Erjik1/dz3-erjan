import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count+1)
    };

    const dicrement = () => {
        setCount(count-1)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={dicrement}>-</button>
        </div>
    );
};

export default Counter;