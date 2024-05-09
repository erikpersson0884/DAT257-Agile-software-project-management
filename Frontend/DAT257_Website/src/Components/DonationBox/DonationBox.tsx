import "./DonationBox.css";
import KortBetal from "./KortBetal";
import KlarnaBetal from "./KlarnaBetal";

function DonationBox() {
  return (
    <>
      <div className="wrapperDonationBox">
        <div className="donate rounded">
          <h2 className="mb-3"> Donate </h2>
            {/* <KortBetal>
            </KortBetal> */}
            <KlarnaBetal>
              
            </KlarnaBetal>
        </div>
      </div>
    </>
  );
}

export default DonationBox;
