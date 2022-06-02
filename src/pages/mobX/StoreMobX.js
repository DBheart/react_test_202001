import React, { PureComponent } from 'react'
import { observer, inject } from 'mobx-react';

@inject('counter')
@observer
class StoreMobX extends PureComponent {
    render() {
        const {counter} = this.props;
        return (
            <div>
                <h1>{counter.number}</h1>
                <button onClick={counter.increase}>+1</button>
                <button onClick={counter.decrease}>-1</button>
            </div>
        )
    }
}

export default StoreMobX