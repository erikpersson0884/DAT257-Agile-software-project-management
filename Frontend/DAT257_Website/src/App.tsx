import { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.css';
import DonationBox from "./Components/DonationBox/DonationBox";
import Footer from "./Components/Footer/footer";
import InformationPage from "./Components/InformationPages/InformationPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/information" element={<InformationPage/>}></Route>
        <Route path="/*" element={<>
          <DonationBox/> 
          <Footer/>
          </>
          }>

        <div className="DonationBox">
          <DonationBox></DonationBox>
        </div>

        <footer className="myFooter">
          <Footer></Footer>
        </footer>

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
