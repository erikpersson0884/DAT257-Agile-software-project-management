import "./WebsiteFeature.css";
import {Link } from "react-router-dom";

function WebsiteFeature () {
    return(
            <div className = "featureImage">
                <div className="featureImageText">
                    <h1 className="featureImageH1">
                        10% of people are suffering <br></br> from starvation
                    </h1>
                    <h4>
                        Act now!
                    </h4>
                    <Link to="/Donate">
                        <button className= "btn">
                            Donate Here!
                        </button>
                    </Link>
                </div>
            </div>
            
           
    )
}

export default WebsiteFeature;