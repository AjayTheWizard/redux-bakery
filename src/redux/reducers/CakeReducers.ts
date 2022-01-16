import { BUY_CAKE, SELL_CAKE } from "../dispatch/CakeTypes";
import { actionType } from "../interfaces"

const cakeInitialState = {
    NUM_OF_CAKES: 25,
}

const CakeReducers = (state = cakeInitialState, action: actionType) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        NUM_OF_CAKES: state.NUM_OF_CAKES - action.payload.n,
      };
    case SELL_CAKE:{
      return{
        ...state,
        NUM_OF_CAKES: state.NUM_OF_CAKES + action.payload.n,
      }
    }
    default:
      return state;
  }
};

export default CakeReducers;
