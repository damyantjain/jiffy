import {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h5>Count</h5>
            <p>{count}</p>
            <button onClick={() =>setCount(count + 1)}>Increment count</button>
        </div>
    )
}

export default Counter;