import "./TopDonations.css";
//import image from "/src/assets/goal-logo.png";


interface LeaderboardCardProps {
    image: string;
    position: number;
    name: string;
    donationAmount: number;
    date: Date;
}

function LeaderboardCard({image, position, name, donationAmount, date}: LeaderboardCardProps) {
    return (
        <div className="cardTopDonations">
            <div className="cardLogoTopDonations">
                <img src={image} className="cardimage" alt="Profile picture" />
            </div>
            <div className="cardTextWrapperTopDonations">
                <h4>#{position}</h4>
                <p>{name}</p>
            </div>
            <div className="cardAmountTopDonation">
                <h1>{donationAmount.toLocaleString()} kr</h1>
            </div>
        </div>
    );
}

export default LeaderboardCard;