import React from 'react'
import { observable, action, decorate } from 'mobx';
import { observer } from 'mobx-react';

// 되기는 된다. 이런식이 아닐뿐이지..
function FunctionMobX() {
    let number = 0;
    
    function increase(){
        number++;
    }
    
    function decrease(){
        number--;
    }

    return (
    <div>
        <h1>{number}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
    </div>        
    )
}

decorate(FunctionMobX,{
    number: observable,
    increase: action,
    decrease: action,
});

export default observer(FunctionMobX);
