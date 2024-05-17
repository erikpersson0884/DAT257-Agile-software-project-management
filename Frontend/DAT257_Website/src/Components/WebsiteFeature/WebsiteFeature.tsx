import "./WebsiteFeature.css";
import {Link } from "react-router-dom";

function WebsiteFeature () {
    return(
            <div className = "featureImage">
                <div className="featureImageText">
                    <h1 className="featureImageH1">
                        10% of people are suffering <br></br> from starvation
                    </h1>
                    <h2>
                        Act now!
                    </h2>
                    <Link to="/Donate">
                        <button className= "btnFeature">
                            Donate Here!
                        </button>
                    </Link>
                </div>
            </div>
            
           
    )
}

export default WebsiteFeature;