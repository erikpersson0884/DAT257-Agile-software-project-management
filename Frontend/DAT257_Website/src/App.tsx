import "bootstrap/dist/css/bootstrap.css";
import DonationBox from "./Components/DonationBox/DonationBox";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <>
      <div className="DonationBox">
        <DonationBox></DonationBox>
      </div>

      <footer className="myFooter">
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
