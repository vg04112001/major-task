import { applyMiddleware, legacy_createStore as createStore} from 'redux'

import  rootReducer  from './rootReducer';
// const dummyReducer = () => 100;

// const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer);

export default store;