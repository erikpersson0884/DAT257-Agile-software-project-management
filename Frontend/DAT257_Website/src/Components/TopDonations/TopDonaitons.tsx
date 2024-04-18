import { useState } from "react";
import "./TopDonations.css";
import image from "/src/assets/goal-logo.png";


function TopDonations() {

    const [isRecentSelected, setIsRecentSelected] = useState(true);

    const handleRecentClick = () => {
        setIsRecentSelected(true);
    };

    const handleTopClick = () => {
        setIsRecentSelected(false);
    };

    const recentDonationsButton = document.getElementById('recentDonations');
    const topDonationsButton = document.getElementById('topDonations');

    return(
        <>
            <div className="bodyTopDonations">
                <div className="wrapperTopDonations">
                    <div className="titleTestTopDonations">
                        TOP DONATIONS
                    </div>
                    <div className="sortingWrapperTopDonations">
                        <div className="sortingContainerTopDonations">
                            <div className="sortingRowTopDonations">
                            <div className={isRecentSelected ? 'sortingSelectedTopDonations' : 'sortingDeselectedTopDonations'} onClick={handleRecentClick}>
                                    Recent Donations
                                </div>
                                <div className={isRecentSelected ? 'sortingDeselectedTopDonations' : 'sortingSelectedTopDonations'} onClick={handleTopClick}>
                                    Top Donations
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rowTopDonations">
                        <div className="cardTopDonations">
                            <div className="cardLogoTopDonations">
                                <img src={image} className="cardimage" alt="PlaceHolder"></img>
                            </div>
                            <div className="cardTextWrapperTopDonations">
                                <h4>
                                    #1
                                </h4>
                                <p>
                                    Anonymous
                                </p>
                            </div>
                            <div className="cardAmountTopDonation">
                                <h1>50,000kr</h1>
                            </div>
                        </div>
                        <div className="cardTopDonations">
                            <div className="cardLogoTopDonations">
                                <img src={image} className="cardimage" alt="PlaceHolder"></img>
                            </div>
                            <div className="cardTextWrapperTopDonations">
                                <h4>
                                    #2
                                </h4>
                                <p>
                                    Anonymous
                                </p>
                            </div>
                            <div className="cardAmountTopDonation">
                                <h1>20,000kr</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopDonations;