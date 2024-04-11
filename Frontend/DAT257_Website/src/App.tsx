import { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.css';
import InformationPage from "./Components/InformationPages/InformationPage";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/information" element={<InformationPage/>}></Route>
        {/** <Route path="/OTHER_PAGE_NAME" element={<OTHER_PAGE_COMPONENT/>}></Route> */}

      </Routes>
    </BrowserRouter>
  )
}

export default App
