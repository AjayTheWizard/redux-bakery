import { BUY_ICE, SELL_ICE } from "../dispatch/IceTypes";
import { actionType } from "../interfaces";

const IceInitialState = {
    NUM_OF_ICE: 30,
}

const IceReducers = (state = IceInitialState, action: actionType) => {
  switch (action.type) {
    case BUY_ICE:
      return {
        ...state,
        NUM_OF_ICE: state.NUM_OF_ICE - action.payload.n,
      };
    case SELL_ICE:
      return {
        ...state,
        NUM_OF_ICE: state.NUM_OF_ICE + action.payload.n,
      };
    default:
      return state;
  }
};

export default IceReducers;
