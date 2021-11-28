// !!!!!!!! данные блок скопирован в App.js и не импортируется
// Reducer
import combineReducers from "./index"

// Redux Persist ------------
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore } from "redux";

const persistConfig = {
  key:'root',
  storage
}

const persistedReducer = persistReducer(persistConfig,combineReducers);

export default() =>{

    let storePersist = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    let persistor = persistStore(storePersist);
    return(storePersist,persistor);
}