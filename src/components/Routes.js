import React from 'react'
import { Route } from 'react-router-dom';
// import Aladin from '../pages/defaultRouter/Aladin';
// import Lion_king from '../pages/defaultRouter/Lion_king';
// import SpiderMan from '../pages/defaultRouter/SpiderMan';
// import ReduxCronology from '../pages/reduxCronology';
// import MobX from '../pages/mobX/MobX';
// import HookCounter from '../pages/reduxHook/HookCounter';
// import FilterableProductTable from '../pages/divisionComponent/first/FilterableProductTable';
// import PureSearch from '../pages/atomicPattern/PureSearch';

function Routes(props) {
    //여기서 하면 조금 괜찮을까?
    const {menuList} = props;
    const menu = menuList.map((menu,index) =>{
        return (
            <Route key={index} exact path={menu.url} component={menu.src}/>
        )
    })

    return (
     <>
         {menu}
     </>
    )
}

export default Routes
