import { actionType } from "../interfaces";
import {
  ADD_CAKE,
  ADD_ICE,
  MIN_CAKE,
  MIN_ICE,
} from "./../dispatch/WalletTypes";

const walletInitialState = {
  balance: 700,
  cakes: 2,
  iceCream: 12,
  name: "Ajay Raja",
};

const WalletReducer = (state = walletInitialState, action: actionType) => {
  switch (action.type) {
    case ADD_CAKE:
      return {
        ...state,
        cakes: state.cakes + action.payload.n,
        balance: state.balance - action.payload.n * 150,
      };
    case MIN_CAKE:
      return {
        ...state,
        cakes: state.cakes - action.payload.n,
        balance: state.balance + action.payload.n * 150,
      };
    case ADD_ICE:
      return {
        ...state,
        iceCream : state.iceCream + action.payload.n,
        balance: state.balance - action.payload.n * 50,
      };
    case MIN_ICE:
      return {
        ...state,
        iceCream: state.iceCream - action.payload.n,
        balance: state.balance + action.payload.n * 50,
      };
    default:
      return state;
  }
};

export default WalletReducer;
