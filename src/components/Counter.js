import {useSelector,useDispatch} from 'react-redux'
import classes from './Counter.module.css';

const Counter = () => {
 const counter =  useSelector(state=>state.counter);
 const dispatch = useDispatch() 
 const toggleCounterHandler = () => {};

 const incrementHandler= ()=> {
  dispatch({type:'increment'})
 }
 const decrementHandler=()=>{
  dispatch({type:'decrement'})
 }

 const incrementBy2=()=>{
  dispatch({type:'incrementBy2'})
 }

 const decrementBy2=()=>{
  dispatch({type:'decrementBy2'})
 }

 const incrementBy5=()=>{
  dispatch({type:'incrementBy5'})
 }

 const decrementBy5=()=>{
  dispatch({type:'decrementBy5'})
 }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={incrementBy2}>Increment</button>
        <button onClick={decrementBy2}>Decrement</button>
      </div>
      <div>
        <button onClick={incrementBy5}>Increment</button>
        <button onClick={decrementBy5}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
