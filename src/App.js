import React, { Component } from 'react';
import DefaultLayout from './components/templates/DefaultLayout';
import Aladin from './pages/defaultRouter/Aladin';
import Lion_king from './pages/defaultRouter/Lion_king';
import SpiderMan from './pages/defaultRouter/SpiderMan';
import ReduxCronology from './pages/reduxCronology';
import MobX from './pages/mobX/MobX';
import HookCounter from './pages/reduxHook/HookCounter';
import FilterableProductTable from './pages/divisionComponent/first/FilterableProductTable';
import PureSearch from './pages/atomicPattern/PureSearch';
import GridPageExample from './apps/GridPageExample';
import GridFormPageExample from './apps/GridFormPageExample';

const menuList = [
  {"url":"/aladin","name":"Aladin","src":Aladin},
  {"url":"/lionking","name":"lionking","src":Lion_king},
  {"url":"/spiderman","name":"spiderman","src":SpiderMan},
  {"url":"/reduxCronology","name":"reduxCronology","src":ReduxCronology},
  {"url":"/mobX","name":"mobX","src":MobX},
  {"url":"/reduxHook","name":"redux + hook","src":HookCounter},
  {"url":"/divComp","name":"division component","src":FilterableProductTable},
  {"url":"/pureSearch","name":"기본 HTML","src":PureSearch},
  {"url":"/atomic","name":"layout만드느중","src":GridPageExample},
  {"url":"/atomic_ant","name":"antD레이아웃","src":GridFormPageExample},
];

class App extends Component {
  
  render() {
    
    return (
      <DefaultLayout menuList={menuList}/>
    );
  }
}

export default App;
