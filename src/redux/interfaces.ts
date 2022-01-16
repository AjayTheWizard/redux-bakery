export interface storeType {
  cakes: {
    NUM_OF_CAKES: number;
  };
  iceCream: {
    NUM_OF_ICE: number;
  };
  wallet: {
    balance: number;
    cakes: number;
    iceCream: number;
    name: string;
  };
}

export interface actionType {
  type: string;
  payload: {
    n: number;
  };
}
