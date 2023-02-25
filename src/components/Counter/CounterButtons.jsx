// могу использовать action's счетчика
import { useDispatch } from "react-redux";
// импортирую action's счетччика
import { toMath, rnd, reset } from "../../store/counterSlice";

const CounterButtons = () => {
    // создаю диспатч
    const dispatch = useDispatch();

    // удобно оборачивать в отдельные функции, чтобы к каждой кнопке в верстке не писать большой код
    const handleMath = amount => {
        dispatch(toMath(amount));
    }

    const handleReset = () => {
        dispatch(reset());
    }

    // как, например, тут. Иначе пришлось бы писать код для рандомного числа в верстке
    const handleRandomNum = () => {
        const num = Math.floor(Math.random() * 50) * (Math.random() < 0.5 ? 1 : -1);
        dispatch(rnd(num))
    }

    return (
        <div>
            <button onClick={() => handleMath(1)}>Increment</button>
            <button onClick={() => handleMath(-1)}>Decrement</button>
            <button onClick={() => handleRandomNum()}>Random Num</button>
            <button onClick={() => handleReset()}>Reset</button>
        </div>
    );
};

export default CounterButtons;