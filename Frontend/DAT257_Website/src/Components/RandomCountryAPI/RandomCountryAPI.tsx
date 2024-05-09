import "./RandomCountryAPI.css";
import React, { useState, useEffect, } from "react";
import axios from "axios";

function RandomCountryAPI() {
  const url = "https://api.hungermapdata.org/v1/foodsecurity/country";
  const [countryData, setCountry] = useState({});
  const [metricsData, setMetrics] = useState({});
  const randomInt = Math.round(Math.random() * 83)

  const fetchCountry = () => {
    return axios.get(url).then((res) => setCountry(res.data.countries[randomInt].country));
  };

  const fetchMetrics = () => {
    return axios.get(url).then((res) => setMetrics(res.data.countries[randomInt].metrics.fcs));
  };

  useEffect(() => {
    fetchMetrics();
    fetchCountry();
  }, []);

  return (
    <div className="mainDivRandom-API">
        <div className="countryInfoRandom-API">
          <p className="countryNameRandom-API">Currently in {countryData.name}</p>
          <p className="amountStarvingRandom-API">There are {Intl.NumberFormat('fr-FR').format(metricsData.people)} people starving</p>
          <p className="percentageStarvingRandom-API">That represents {Math.round(metricsData.prevalence * 100)}% of the country´s population</p>
          <div className="buttonDivRandom-API">
            <a href="/statistics"><button className="buttonRandom-API">See more statistics &gt;&gt;</button></a>
          </div>
        </div>
    </div>
  );
}

export default RandomCountryAPI;