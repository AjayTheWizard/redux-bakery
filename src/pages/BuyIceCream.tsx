import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

import { storeType } from "./../redux/interfaces";
import { BuyIce, SellIce } from "./../redux/dispatch/IceTypes";
import { AddIce, MinIce } from './../redux/dispatch/WalletTypes';

const BuyIceCream = () => {
  const buyInputRef = useRef<HTMLInputElement | null>(null);
  const sellInputRef = useRef<HTMLInputElement | null>(null);
  const noOfIces = useSelector((state: storeType) => state.iceCream.NUM_OF_ICE);
  const iceBalance = useSelector((state: storeType) => state.wallet.iceCream);
  const walletBalance = useSelector((state: storeType) => state.wallet.balance);
  const dispatch = useDispatch();
  const buyIce = () => {
    if (
      !buyInputRef.current?.valueAsNumber ||
      Math.sign(buyInputRef.current?.valueAsNumber) === -1
    ) {
      toast.error("Enter Valid Number");
    } else if (buyInputRef.current?.valueAsNumber > noOfIces) {
      toast.error("There is'nt enough IceCreams.");
    } else if((buyInputRef.current?.valueAsNumber * 50) > walletBalance){
      toast.error("Not Enough Money")
    } else {
      dispatch(BuyIce(buyInputRef.current?.valueAsNumber));
      dispatch(AddIce(buyInputRef.current?.valueAsNumber));
    }
  };
  const sellIce = () => {
    if (
      !sellInputRef.current?.valueAsNumber ||
      Math.sign(sellInputRef.current?.valueAsNumber) === -1
    ) {
      toast.error("Enter valid Number");
    } else if (sellInputRef.current?.valueAsNumber > iceBalance) {
      toast.error("There is'nt enough IceCreams.");
    } else {
      dispatch(SellIce(sellInputRef.current?.valueAsNumber));
      dispatch(MinIce(sellInputRef.current?.valueAsNumber));
    }
  };
  const buyOne = () => {
    if (noOfIces < 0) {
      toast.error("Sorry There is no cake.");
    }else if(walletBalance < 50){
      toast.error("Not enough Money!")
    }else {
      dispatch(BuyIce(1));
      dispatch(AddIce(1))
    }
  };
  const sellOne = () => {
    if (iceBalance < 1) {
      toast.error("There is'nt enough IceCreams.");
    }else {
      dispatch(SellIce(1));
      dispatch(MinIce(1));
    }
  };
  return (
    <div className="main-div">
      <Toaster />
      <ul>
        <li>
          <h1>Available Ice Creams - {noOfIces}</h1>
        </li>
        <br />
        <li>
          <h1>Buy Cakes</h1>
        </li>
        <li>
          <button onClick={buyOne}>Buy One</button>
        </li>
        <li className="input-container">
          <input ref={buyInputRef} type="number" />
        </li>
        <li>
          <button onClick={buyIce}>Buy More</button>
        </li>
        <br />
        <li>
          <h1>Sell Cakes</h1>
        </li>
        <li>
          <button onClick={sellOne}>Sell One</button>
        </li>
        <li className="input-container">
          <input ref={sellInputRef} type="number" />
        </li>
        <li>
          <button onClick={sellIce}>Sell More</button>
        </li>
      </ul>
    </div>
  );
};

export default BuyIceCream;
