export const BUY_ICE = "BUY_ICE"
export const SELL_ICE = "SELL_ICE"

export const BuyIce = (n = 1)=>{
    return {
        type: BUY_ICE,
        payload: {
            n,
        }
    }
}

export const SellIce = (n = 1)=>{
    return {
        type: SELL_ICE,
        payload: {
            n,
        }
    }
}