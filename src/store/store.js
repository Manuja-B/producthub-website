import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/root";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export default preloadedState => {
    let store = createStore(
        persistedReducer,
        preloadedState,
        applyMiddleware(thunk)
    )

    let persistor = persistStore(store)
    return { store, persistor }
}