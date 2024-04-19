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

                        <div className="cardTopDonations">
                            <div className="cardLogoTopDonations">
                                <img src={image} className="cardimage" alt="PlaceHolder"></img>
                            </div>
                            <div className="cardTextWrapperTopDonations">
                                <h4>
                                    #3
                                </h4>
                                <p>
                                    David Lewis
                                </p>
                            </div>
                            <div className="cardAmountTopDonation">
                                <h1>12,345kr</h1>
                            </div>
                        </div>

                        <div className="cardTopDonations">
                            <div className="cardLogoTopDonations">
                                <img src={image} className="cardimage" alt="PlaceHolder"></img>
                            </div>
                            <div className="cardTextWrapperTopDonations">
                                <h4>
                                    #4
                                </h4>
                                <p>
                                    Verylongname Alsoverylongsurname
                                </p>
                            </div>
                            <div className="cardAmountTopDonation">
                                <h1>10,000kr</h1>
                            </div>
                        </div>

                        <div className="cardTopDonations">
                            <div className="cardLogoTopDonations">
                                <img src={image} className="cardimage" alt="PlaceHolder"></img>
                            </div>
                            <div className="cardTextWrapperTopDonations">
                                <h4>
                                    #5
                                </h4>
                                <p>
                                    Anonymous
                                </p>
                            </div>
                            <div className="cardAmountTopDonation">
                                <h1>9,999kr</h1>
                            </div>
                        </div>

                        <div className="cardTopDonations">
                            <div className="cardLogoTopDonations">
                                <img src={image} className="cardimage" alt="PlaceHolder"></img>
                            </div>
                            <div className="cardTextWrapperTopDonations">
                                <h4>
                                    #6
                                </h4>
                                <p>
                                    Anonymous
                                </p>
                            </div>
                            <div className="cardAmountTopDonation">
                                <h1>9,998kr</h1>
                            </div>
                        </div>

                        <div className="cardTopDonations">
                            <div className="cardLogoTopDonations">
                                <img src={image} className="cardimage" alt="PlaceHolder"></img>
                            </div>
                            <div className="cardTextWrapperTopDonations">
                                <h4>
                                    #7
                                </h4>
                                <p>
                                    Anonymous
                                </p>
                            </div>
                            <div className="cardAmountTopDonation">
                                <h1>9,000kr</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default TopDonations;