import { createStore, combineReducers } from 'redux';
import counters from './countersReducer';
import counterSelected from './counterSelectedReducer';

const rootReducer = combineReducers({
  counters,
  counterSelected,
});


const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;