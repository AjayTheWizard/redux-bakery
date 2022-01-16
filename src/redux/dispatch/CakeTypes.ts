export const BUY_CAKE = "BUY_CAKE"
export const SELL_CAKE = "SELL_CAKE"
export const BuyCake = (n = 1)=>{
    return {
        type: BUY_CAKE,
        payload: {
            n
        }
    }
}

export const SellCake = (n = 1)=>{
    return{
        type: SELL_CAKE,
        payload: {
            n
        }
    }
}