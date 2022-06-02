import React from 'react'
import PureMobX from './pureMobX'
import DecoratorMobX from './DecoratorMobX'
import StoreMobX from './StoreMobX'
import FunctionMobX from './functionMobX'

function MobX() {
    return (
        <div>
            <label>pure MobX</label><PureMobX/>
            <label>decorator mobx</label><DecoratorMobX/>
            <label>store mobX</label><StoreMobX/>
            <label>function mobX:fail</label><FunctionMobX/>
        </div>
    )
}

export default MobX;
