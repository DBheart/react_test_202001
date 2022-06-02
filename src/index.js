import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// createStore 와 루트 리듀서 불러오기
import { createStore } from 'redux';
// import rootReducer from './pages/duckPattern/modules';
// **** (1) Provider 불러오기
import * as reduxHook from 'react-redux';
import CounterStore from './pages/mobX/store/CounterStore';
import { Provider } from 'mobx-react';
import rootReducer from './pages/reduxHook/modules';

// **** 리덕스 개발자도구 적용
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const  store = createStore(rootReducer,devTools);
const counter = new CounterStore();

ReactDOM.render(
    // <Provider store={store}>
    <Provider counter={counter}>
      <reduxHook.Provider store={store}>
        <App />
      </reduxHook.Provider>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
