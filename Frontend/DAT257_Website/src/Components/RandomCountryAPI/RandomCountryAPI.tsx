import "./RandomCountryAPI.css";
import React, { useState, useEffect, } from "react";
import {Link} from "react-router-dom";

function RandomCountryAPI() {
  const url = "https://api.hungermapdata.org/v1/foodsecurity/country";
  const [countryData, setCountry] = useState(null);
  const [metricsData, setMetrics] = useState(null);
  const [loading, setLoading] = useState(false);
  const randomInt = Math.round(Math.random() * 83)

  useEffect(() => {
    setLoading(true);
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setCountry(data.countries[randomInt].country);
      setMetrics(data.countries[randomInt].metrics.fcs);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        setLoading(false);
    });
  }, []);
  if(loading || !metricsData || !countryData) {
    return(
    <div className="mainDivRandom-API">
      <div className="countryInfoRandom-API">
        <p>Loading...</p>
      </div>
    </div>
  )

  } else {
  return (
    <div className="mainDivRandom-API">
        <div className="countryInfoRandom-API">
          <p className="countryNameRandom-API">Currently in {countryData.name}</p>
          <p className="amountStarvingRandom-API">There are {Intl.NumberFormat('fr-FR').format(metricsData.people)} people starving</p>
          <p className="percentageStarvingRandom-API">That represents {Math.round(metricsData.prevalence * 100)}% of the country´s population</p>
          <div className="buttonDivRandom-API">
            <Link to="/statistics"><button className="buttonRandom-API">See more statistics &gt;&gt;</button></Link>
          </div>
        </div>
    </div>
  );
}
}

export default RandomCountryAPI;