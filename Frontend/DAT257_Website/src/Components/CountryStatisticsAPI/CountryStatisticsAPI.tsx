import "./CountryStatisticsAPI.css";
import React, { useState, useEffect, } from "react";
import axios from "axios";

function CountryStatisticsAPI() {
  const url = "https://api.hungermapdata.org/v1/foodsecurity/country";
  const [countryData, setCountry] = useState([]);
  const [metricsData, setMetrics] = useState([]);

  const fetchCountry = () => {
    return axios.get(url).then((res) => setCountry(res.data.countries));
  };

  const fetchMetrics = () => {
    return axios.get(url).then((res) => setMetrics(res.data.countries.metrics.fcs));
  };

  useEffect(() => {
    //fetchMetrics();
    fetchCountry();
  }, []);

  return (
    <div className="mainDivAPI">
        <div className="countryInfoAPI">
        {countryData.map((dataObj, index) => {
            return(<div><p className="countryNameAPI">{dataObj.country.name}</p></div>)
        })}
        </div>
    </div>
  );
}

export default CountryStatisticsAPI;