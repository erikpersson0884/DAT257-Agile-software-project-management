import "./API.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function API() {
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

  const doubleFetch = () => {
    return fetchCountry(), fetchMetrics()
  }

  useEffect(() => {
    doubleFetch()
  }, []);

  return (
    <div className="mainDivAPI">
        <div className="countryInfoAPI">
          <p className="countryNameAPI">Currently in {countryData.name}</p>
          <p className="amountStarvingAPI">There are {metricsData.people} people starving</p>
          <p className="percentageStarvingAPI">That is {Math.round(metricsData.prevalence * 100)}% of the countries population</p>

        </div>
    </div>
  );
}

export default API;