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
    <div className="mainDivCAPI">
        {countryData.map((countryData, index) => {
            return(
            <div className="countryInfoCAPI">
                <p className="countryNameCAPI">{countryData.country.name}</p>
                <div className="countryStatisticsCAPI">
                    <p className="amountStarvingCAPI">There are {Intl.NumberFormat('fr-FR').format(countryData.metrics.fcs.people)} people starving</p>
                    <p className="percentageStarvingCAPI">That is {Math.round(countryData.metrics.fcs.prevalence * 100)}% of the countries population</p>
                </div>
            </div>
            )
        })}
    </div>
  );
}

export default CountryStatisticsAPI;