import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";

const CounterView = () => {
    const count = useSelector((state) => state.counter.count)
    console.log(count);
    const dispatch = useDispatch()
    return (
        <div>
            Count : {count} <br />
            <button onClick={()=> {dispatch(increment())}}>Increment</button>
            <button onClick={()=> {dispatch(decrement())}}>Decrement</button>
            <button onClick={()=> {dispatch(reset())}}>Reset</button>


        </div>
    );
};

export default CounterView;