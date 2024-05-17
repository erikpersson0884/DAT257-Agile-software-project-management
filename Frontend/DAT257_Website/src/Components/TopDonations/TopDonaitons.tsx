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
        // fetch('/api/donations?sortBy=${sortBy}')
        fetch('/api/donations/getLeaderboard')
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


    // setLeaderboardData([
    //     {
    //         "amount": "039458345",
    //         "date": 1715288661482,
    //         "user": {
    //           "type": "anonymous"
    //         }
    //       },
    //       {
    //         "amount": "44",
    //         "date": 1715288671261,
    //         "user": {
    //           "type": "registered",
    //           "userId": "1"
    //         }
    //       }
    // ])
    
    // const leaderboardData = [
    //     {
    //       "amount": "456",
    //       "date": 1715288522470,
    //       "user": {
    //         "type": "registered",
    //         "userId": "1"
    //       }
    //     },
    //     {
    //       "amount": "600",
    //       "date": 1715288633924,
    //       "user": {
    //         "type": "guest",
    //         "firstname": "Erik",
    //         "lastname": "Persson"
    //       }
    //     },
    //     {
    //       "amount": "9347859384759",
    //       "date": 1715288651033,
    //       "user": {
    //         "type": "anonymous"
    //       }
    //     },
    //     {
    //       "amount": "039458345",
    //       "date": 1715288661482,
    //       "user": {
    //         "type": "anonymous"
    //       }
    //     },
    //     {
    //       "amount": "44",
    //       "date": 1715288671261,
    //       "user": {
    //         "type": "registered",
    //         "userId": "1"
    //       }
    //     }
    //   ]
    
    
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
                        {leaderboardData.map((item, index) => (
                            <LeaderboardCard
                                key={index}
                                image={image}
                                position={index + 1}
                                name={item.user.type}
                                donationAmount={parseInt(item.amount)}
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