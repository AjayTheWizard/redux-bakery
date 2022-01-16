import React from "react";
import { useSelector } from "react-redux"
import { storeType } from './../redux/interfaces';

const Index: React.FC = () => {
  const noOfCakes = useSelector((state: storeType)=>state.cakes.NUM_OF_CAKES)
  const noOfIces = useSelector((state: storeType)=>state.iceCream.NUM_OF_ICE)
  return <div className="main-div">
    <ul>
      <li><h1>Available Cakes - {noOfCakes}</h1></li>
      <li><h1>Available Ice Creams - {noOfIces}</h1></li>
    </ul>
    </div>;
};

export default Index;
