import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import DonationBox from "./Components/DonationBox/DonationBox";
import InformationPage from "./Components/InformationPage/InformationPage";
import Footer from "./Components/Footer/Footer.tsx";
import Header from "./Components/Header/Header.tsx";
import RegisterPage from "./Components/RegisterPage/RegisterPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/information" element={<InformationPage />}></Route>
        <Route path="/" element={<DonationBox />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
