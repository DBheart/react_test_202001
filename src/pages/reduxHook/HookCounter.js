import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './modules/counter'

function HookCounter() {
    const counter = useSelector(state => state.counter,[]);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increment()), [dispatch]);//이게 조금 알아볼수 없는 걸로 되어있다, 콜백이 없으면 오류까지 난다.
    const onDecrease = useCallback(() => dispatch(decrement()), [dispatch]);//이건 어떻게 해석을 해야하는가?    

    const pureIncrease = () => dispatch(increment());//과연 dispatch는 무슨역할을 해줄까?
    const pureDecrease = () => dispatch(decrement());
    
    return (
      <div>
        <h1>{counter}</h1>
        <div>
          <button onClick={pureIncrease}>+1</button>
          <button onClick={pureDecrease}>-1</button>
        </div>
      </div>        
    )
}

export default HookCounter
