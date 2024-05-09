import "./DonationBox.css";
import KortBetal from "./KortBetal";
import KlarnaBetal from "./KlarnaBetal";
import SwishBetal from "./SwishBetal";

function DonationBox() {
  return (
    <>
      <div className="wrapperDonationBox">
        <div className="donate rounded">
          <h2 className="mb-3"> Donate </h2>
            {/* <KortBetal>
            </KortBetal> */}
            {/* <KlarnaBetal>
              
            </KlarnaBetal> */}
            <SwishBetal>

            </SwishBetal>
        </div>
      </div>
    </>
  );
}

export default DonationBox;
