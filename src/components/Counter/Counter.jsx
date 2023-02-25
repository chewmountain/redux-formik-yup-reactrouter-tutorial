// useSelector - получаю данные из стора
import { useSelector } from "react-redux";

import CounterButtons from "./CounterButtons";

const Counter = () => {
    const counter = useSelector(state => state.counter);
    return (
        <div>
            <h3>Counter: {counter.count}</h3>
            <CounterButtons />
        </div>
    );
};

export default Counter;