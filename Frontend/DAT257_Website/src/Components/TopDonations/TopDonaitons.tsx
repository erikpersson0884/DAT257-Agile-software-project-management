import React, { useState, useEffect } from 'react';
import "./TopDonations.css";
import image from "/src/assets/goal-logo.png";
import LeaderboardCard from "./LeaderboardCard";


interface User {
    type: string;
    firstname?: string;
    lastname?: string;
    userId?: string;
}

interface Donation {
    amount: string;
    date: number;
    user: User;
}

function TopDonations() {
    const [leaderboardData, setLeaderboardData] = useState<Donation[]>([]);
    const [isRecentSelected, setIsRecentSelected] = useState(true);

    useEffect(() => {
        const sortBy = isRecentSelected ? 'date' : 'amount';
        fetch(`/api/donations/getLeaderboard?sortBy=${sortBy}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Ensure that amount is converted to a number
                const processedData = data.map((donation: Donation) => ({
                    ...donation,
                    amount: parseInt(donation.amount, 10) // Convert amount to integer
                }));
                setLeaderboardData(processedData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [isRecentSelected]);
    
    
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
                    {leaderboardData.map((item, index) => {
                        let name = '';

                        switch (item.user.type) {
                            case 'registered':
                                name = `${item.user.firstname} ${item.user.lastname}`;
                                break;
                            case 'guest':
                                name = `${item.user.firstname} ${item.user.lastname}`;
                                break;
                            case 'anonymous':
                                name = 'Anonymous';
                                break;
                            default:
                                name = 'Unknown';
                        }

                        return (
                            <LeaderboardCard
                                key={index}
                                image={image}
                                position={index + 1}
                                name={name}
                                donationAmount={parseInt(item.amount)}
                                date={item.date}
                            />
                        );
                    })}

                        
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopDonations;