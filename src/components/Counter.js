import {useSelector,useDispatch} from 'react-redux'
import classes from './Counter.module.css';
import { counterActions } from '../Store';

const Counter = () => {
 const counter =  useSelector(state=>state.counter.counter);
 const dispatch = useDispatch() 
 const visible = useSelector(state=>state.counter.showCounter)
 

 const incrementHandler= ()=> {
  dispatch(counterActions.increment())
 }
 const decrementHandler=()=>{
  dispatch(counterActions.decrement())
 }

 const incrementBy2=()=>{
  dispatch(counterActions.increase(2))
 }

 const decrementBy2=()=>{
  dispatch(counterActions.increase(-2))
 }

 
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {visible&&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={incrementBy2}>Incrementby2</button>
        <button onClick={decrementBy2}>Decrementby2</button>
      </div>
      <button onClick={()=>{dispatch(counterActions.toggleCounter())}}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
