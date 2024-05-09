import { Router } from 'express';
import fs from 'fs';

const donationsRouter = Router();
const image ="/src/assets/goal-logo.png";


donationsRouter.get('/getLeaderboard', (req, res) => {
    let leaderboardData = fs.readFileSync("data/donations.json", 'utf8');
    res.status(200).send(leaderboardData);
});

donationsRouter.post('/addDonation', (req, res) => {
    let leaderboardData = fs.readFileSync("data/donations.json", 'utf8');
    leaderboardData = JSON.parse(leaderboardData);
    leaderboardData.push(req.body.newDonation);

    fs.writeFileSync("data/donations.json", JSON.stringify(leaderboardData, null, 2))
    res.status(200).send(leaderboardData);
});


export default donationsRouter;