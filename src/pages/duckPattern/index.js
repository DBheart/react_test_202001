import React from 'react'
import './DuckPattern.css';
import PaletteContainer from './containers/PaletteContainer';
import CounterContainer from './containers/CounterContainer';
import WaitingList from './WaitingList';

function DuckPattern() {
    return (
      <div className="App">
        <PaletteContainer /> {/* **** (2) 대체하기 */}
        <CounterContainer /> {/* ****(2) 대체하기 */}
        <WaitingList />
      </div>        
    )
}

export default DuckPattern
