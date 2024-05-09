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
    <div className="mainDivRAPI">
        <div className="countryInfoRAPI">
          <p className="countryNameRAPI">Currently in {countryData.name}</p>
          <p className="amountStarvingRAPI">There are {Intl.NumberFormat('fr-FR').format(metricsData.people)} people starving</p>
          <p className="percentageStarvingRAPI">That represents {Math.round(metricsData.prevalence * 100)}% of the countries population</p>
        </div>
        <div className="buttonDivRAPI">
          <button className="buttonRAPI">See more statistics &gt;&gt;</button>
        </div>
    </div>
  );
}

export default RandomCountryAPI;