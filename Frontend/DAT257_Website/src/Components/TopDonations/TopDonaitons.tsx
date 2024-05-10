import { useState } from "react";
import "./TopDonations.css";
import image from "/src/assets/goal-logo.png";
import LeaderboardCard from "./LeaderboardCard";



function TopDonations() {

    const [isRecentSelected, setIsRecentSelected] = useState(true);

    const handleRecentClick = () => {
        setIsRecentSelected(true);
    };

    const handleTopClick = () => {
        setIsRecentSelected(false);
    };

    const leaderboardData = [
        {
            image: image,
            name: "David Lewis",
            donationAmount: 100000,
            date: new Date("2019-01-16")
        },
        {
            image: image,
            name: "David Albert",
            donationAmount: 40000,
            date: new Date("2019-01-16")
        },
        {
            image: image,
            name: "Verylong namethat istotesthowthislooks",
            donationAmount: 30000,
            date: new Date("2019-01-16")
        },
        {
            image: image,
            name: "David",
            donationAmount: 25000,
            date: new Date("2019-01-16")
        },
        {
            image: image,
            name: "pixeln",
            donationAmount: 20000,
            date: new Date("2019-01-16")
        },
        {
            image: "/src/assets/goal-logo.png",
            name: "RANGO BANGO KATAPULT TANGO",
            donationAmount: 15000,
            date: new Date("2019-01-16")
        },
        {
            image: image,
            name: "Erik Gökman",
            donationAmount: 100600,
            date: new Date("2019-01-16")
        },   
        {
            image: image,
            name: "Anton",
            donationAmount: 8,
            date: new Date("2019-01-16")
        },   
        {
            image: image,
            name: "ROLF JOHANSSON",
            donationAmount: 2930,
            date: new Date("2019-01-16")
        },   
        {
            image: image,
            name: "Albert",
            donationAmount: 1273,
            date: new Date("2019-01-16")
        },   
        {
            image: image,
            name: "Pelle",
            donationAmount: 3872,
            date: new Date("2019-01-16")
        }   
    ]

    leaderboardData.sort((a, b) => b.donationAmount - a.donationAmount);
    

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
                        {leaderboardData.map((item, index) => (
                            <LeaderboardCard
                                key={index}
                                image={item.image}
                                position={index + 1}
                                name={item.name}
                                donationAmount={item.donationAmount}
                                date={item.date}
                            />
                        ))}
                        
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopDonations;