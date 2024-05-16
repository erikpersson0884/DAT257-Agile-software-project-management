import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import DonationBox from "./Components/DonationBox/DonationBox";
import RandomCountryAPI from "./Components/RandomCountryAPI/RandomCountryAPI.tsx";
import CountryStatisticsAPI from "./Components/CountryStatisticsAPI/CountryStatisticsAPI.tsx";
import InformationPage from "./Components/InformationPage/InformationPage";
import Footer from "./Components/Footer/Footer.tsx";
import Header from "./Components/Header/Header.tsx";
import RegisterPage from "./Components/RegisterPage/RegisterPage.tsx";
import { useState } from "react";
import AboutPage from "./Components/AboutPage/AboutPage.tsx";
import ProfilePageFetcher from "./Components/ProfilePage/ProfilePageFetcher.tsx";
import WebsiteFeature from "./Components/WebsiteFeature/WebsiteFeature.tsx";
import TopDonations from "./Components/TopDonations/TopDonaitons.tsx";

function App() {
  const [data, setData] = useState();
  const urlProxy = "/api/v1";

  axios
    .get(urlProxy)
    .then((res) => setData(res.data))
    .catch((err) => {
      console.error(err);
    });

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/information" element={<InformationPage />}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}> </Route>
        <Route path="/profile" element={<ProfilePageFetcher />}></Route>
        <Route path="/donate" element={<DonationBox/>}></Route>
        <Route path="/" element={<> 
              <WebsiteFeature/>
              <RandomCountryAPI/>
              </>}></Route>
        <Route path="/donate" element={<DonationBox/>}></Route>
        <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
