import "./DonationBox.css";
import KortBetal from "./KortBetal";
import KlarnaBetal from "./KlarnaBetal";
import SwishBetal from "./SwishBetal";
import { useState } from 'react';



function DonationBox() {
  const [showComponent, setShowComponent] = useState('A');

  const handleClick = (showComponent) => {
    setShowComponent(showComponent);
  }

  let componentToDisplay;

  switch (showComponent) {
    case 'Kort':
      componentToDisplay = <KortBetal />;
      break;
    case 'Klarna':
      componentToDisplay = <KlarnaBetal />;
      break;
    case 'Swish':
      componentToDisplay = <SwishBetal />;
      break;
    default:
      componentToDisplay = <KortBetal />;
  }
  return (
    <>
      <div className="wrapperDonationBox">
        <div className="donate rounded">
          <h2 className="mb-3"> Donate </h2>
          <div className = "paymentButtons">
            <button className="btn btn-primary btn-lg" id="kort" onClick={() => handleClick('Kort')}> Kort</button>
            <button className="btn btn-primary btn-lg" id="klarna" onClick={() => handleClick('Klarna')}> Klarna </button>
            <button className="btn btn-primary btn-lg" id="swish" onClick={() => handleClick('Swish')}> Swish </button>
          </div>
          {componentToDisplay}
        </div>
      </div>
    </>
  );
}

export default DonationBox;