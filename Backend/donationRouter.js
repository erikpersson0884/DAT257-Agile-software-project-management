import { Router } from 'express';
import fs from 'fs';
import { getUserIdFromAdminKey } from './authRouter.js';


const donationsRouter = Router();
const image ="/src/assets/goal-logo.png";

donationsRouter.get('/getLeaderboard', (req, res) => {
    const sortBy = req.query.sortBy;
    console.log(sortBy)
    let leaderboardData = fs.readFileSync("data/donations.json", 'utf8');
    leaderboardData = JSON.parse(leaderboardData);

    if (sortBy == "amount") {
        console.log("amount - if")
        leaderboardData.sort((a, b) => b.amount - a.amount);
    } else {
        console.log("date - if")
        leaderboardData.sort((a, b) => b.date - a.date);
    }

    // Return only the top 25 items
    leaderboardData = leaderboardData.slice(0, 25);
    res.status(200).send(leaderboardData);
});

donationsRouter.post('/addDonation', (req, res) => {
    console.log(req.body)
    const donationData = req.body;
    const newDonation = {
        amount: donationData.donationAmount,
        date: Date.now(),
        user : {}
    }
    if (donationData.user.type === "anonymous") {
        newDonation.user.type = "anonymous";
    } else if (donationData.user.type === "guest") {
        newDonation.user.type = "guest";
        newDonation.user.firstname = donationData.user.info.firstname;
        newDonation.user.lastname = donationData.user.info.lastname;
    } else if (donationData.user.type === "registered") {
        newDonation.user.type = "registered";
        newDonation.user.userId = getUserIdFromAdminKey(donationData.user.info.adminKey);
    } else {
        res.status(400).send("Invalid user type");
        return;
    }

    let leaderboardData = fs.readFileSync("data/donations.json", 'utf8');
    leaderboardData = JSON.parse(leaderboardData);
    leaderboardData.push(newDonation);

    fs.writeFileSync("data/donations.json", JSON.stringify(leaderboardData, null, 2))
    res.status(200).send(leaderboardData);
});

export default donationsRouter;