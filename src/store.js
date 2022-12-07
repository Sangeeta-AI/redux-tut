import { createStore } from 'redux';
import rootReducer from "./reducers/index";

//createStore deprecated
const store = createStore(rootReducer);

export default store;