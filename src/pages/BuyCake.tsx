import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeType } from "./../redux/interfaces";
import { BuyCake, SellCake } from "./../redux/dispatch/CakeTypes";
import toast, { Toaster } from "react-hot-toast";
import { AddCake, MinCake } from "../redux/dispatch/WalletTypes";

const BuyCakeCream = () => {
  const buyInputRef = useRef<HTMLInputElement | null>(null);
  const sellInputRef = useRef<HTMLInputElement | null>(null);
  const noOfCakes = useSelector((state: storeType) => state.cakes.NUM_OF_CAKES);
  const cakeBalance = useSelector((state: storeType) => state.wallet.cakes);
  const walletBalance = useSelector((state: storeType) => state.wallet.balance);
  const dispatch = useDispatch();
  const buyCake = () => {
    if (
      !buyInputRef.current?.valueAsNumber ||
      Math.sign(buyInputRef.current?.valueAsNumber) === -1
    ) {
      toast.error("Enter Valid Number");
    } else if (buyInputRef.current?.valueAsNumber > noOfCakes) {
      toast.error("You can't buy cakes more than\n total number of cakes", {
        duration: 3000,
      });
    } else if((buyInputRef.current?.valueAsNumber * 50) > walletBalance){
      toast.error("Not Enough Money")
    }else if(walletBalance < 150){
      toast.error("Not enough Balance!")
    } else {
      dispatch(BuyCake(buyInputRef.current?.valueAsNumber));
      dispatch(AddCake(buyInputRef.current?.valueAsNumber))
    }
  };
  const sellCake = () => {
    if (
      !sellInputRef.current?.valueAsNumber ||
      Math.sign(sellInputRef.current?.valueAsNumber) === -1
    ) {
      toast.error("Enter valid Number");
    }else if( cakeBalance < sellInputRef.current?.valueAsNumber){
      toast.error("Not enough Cakes to sell")
    } else {

      dispatch(SellCake(sellInputRef.current?.valueAsNumber));
      dispatch(MinCake(sellInputRef.current?.valueAsNumber))
    }
  };
  const buyOne = () => {
    if (noOfCakes === 0) {
      toast.error("Sorry There is no cake.");
    }else if(walletBalance < 150){
      toast.error("Not enough Balance!")
    } else {
      dispatch(BuyCake(1));
      dispatch(AddCake(1))
    }
  };
  const sellOne = () => {
    if(cakeBalance <= 0){
      toast.error("Not enough Cakes to sell")
    }else{
      dispatch(SellCake(1));
      dispatch(MinCake(1))
    }
  };
  return (
    <div className="main-div">
      <Toaster />
      <ul>
        <li>
          <h1>Available Cakes - {noOfCakes}</h1>
        </li>
        <br />
        <li>
          <h1>Buy A Cake</h1>
        </li>
        <li>
          <button onClick={buyOne}>Buy One</button>
        </li>
        <li className="input-container">
          <input ref={buyInputRef} type="number" />
        </li>
        <li>
          <button onClick={buyCake}>Buy More</button>
        </li>
        <br />
        <li>
          <h1>Want to Sell?</h1>
        </li>
        <li>
          <button onClick={sellOne}>Sell One</button>
        </li>
        <li className="input-container">
          <input ref={sellInputRef} type="number" />
        </li>
        <li>
          <button onClick={sellCake}>Sell More</button>
        </li>
      </ul>
    </div>
  );
};

export default BuyCakeCream;
