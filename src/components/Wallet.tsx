import { stat } from "fs";
import { useSelector } from "react-redux";
import { storeType } from "./../redux/interfaces";

const Wallet: React.FC = () => {
  const walletBalance = useSelector((state: storeType) => state.wallet.balance);
  const cakeBalance = useSelector((state: storeType) => state.wallet.cakes);
  const iceBalance = useSelector((state: storeType) => state.wallet.iceCream);
  const userName = useSelector((state: storeType) => state.wallet.name);
  return (
    <div className="card">
      <div className="upper-row">
        <div className="card-item">
          <span>Active Balance</span>
          <span>
            <span className="dollar">&#8377;&nbsp;</span>
            {walletBalance}
          </span>
        </div>
        <div className="card-item">
          <span>Your Name</span>
          <span>{userName}</span>
        </div>
        <div className="card-item">
          <span>No of Cakes</span>
          <span>{cakeBalance}</span>
        </div>
        <div className="card-item">
          <span>No of Ice Creams</span>
          <span>{iceBalance}</span>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
