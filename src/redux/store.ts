// import { Store, legacy_createStore as createStore} from 'redux'

// import  rootReducer  from './rootReducer';
// import { DispatchType, ImageDataAction, SingleImgData } from '../interface';
// // const dummyReducer = () => 100;

// // const sagaMiddleware = createSagaMiddleware();
// const store: Store<SingleImgData[], ImageDataAction> & {
//   dispatch: DispatchType
// } = createStore(rootReducer);

// export default store;

import { configureStore } from '@reduxjs/toolkit'
import { wishListReducer } from './slices/wishSlice';
const store = configureStore({
  reducer: {
    wishListReducer
  }
});

export default store;