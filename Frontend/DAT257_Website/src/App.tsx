import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import DonationBox from "./Components/DonationBox/DonationBox";
import InformationPage from "./Pages/InformationPage/InformationPage.tsx";
import Footer from "./Components/Footer/Footer.tsx";
import Header from "./Components/Header/Header.tsx";
import LoginForm from "./Components/LoginForm/LoginForm.tsx";
import RegisterPage from "./Pages/RegisterPage/RegisterPage.tsx";
import HomePage from "./Pages/HomePage/HomePage.tsx";

function App() {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/information" element={<InformationPage/>}></Route>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/register" element={<RegisterPage/>}></Route>

          </Routes>



      </BrowserRouter>
    )
}

export default App;