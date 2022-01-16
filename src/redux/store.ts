import { createStore, combineReducers } from "@reduxjs/toolkit"
import CakeReducers from './reducers/CakeReducers';
import IceReducers from "./reducers/IceReducers";
import WalletReducer from './reducers/WalletReducers';

const combinedReducers = combineReducers({
    cakes: CakeReducers,
    iceCream: IceReducers,
    wallet: WalletReducer
})

export const RootStore = createStore(combinedReducers)