import { createContext } from "react";

const initialState = {};
const store = createContext(initialState);
const {Provider} = store;

const StateProvider = ({children}) => {
    return <Provider {...initialState} >{children}</Provider>
}


export {
    StateProvider,
    store
}