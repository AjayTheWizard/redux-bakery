import { actionType } from "../interfaces";

export const ADD_CAKE = "ADD_CAKE";
export const MIN_CAKE = "MIN_CAKE";
export const ADD_ICE = "ADD_ICE";
export const MIN_ICE = "MIN_ICE";

export const AddCake = (n: number): actionType => {
  return {
    type: ADD_CAKE,
    payload: {
      n,
    },
  };
};
export const MinCake = (n: number): actionType => {
    return {
      type: MIN_CAKE,
      payload: {
        n,
      },
    };
  };
  
export const AddIce = (n: number): actionType => {
    return {
      type: ADD_ICE,
      payload: {
        n,
      },
    };
  };
  
export const MinIce = (n: number): actionType => {
    return {
      type: MIN_ICE,
      payload: {
        n,
      },
    };
  };
  