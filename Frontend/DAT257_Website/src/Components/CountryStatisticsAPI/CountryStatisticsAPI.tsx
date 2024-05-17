import "./CountryStatisticsAPI.css";
import React, { useState, useEffect, } from "react";

function CountryStatisticsAPI() {
  const url = "https://api.hungermapdata.org/v1/foodsecurity/country";
  const [countryData, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setCountry(data.countries);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        setLoading(false);
    });
  }, []);
  

  if(loading) {
    return(
    <div className="mainDivCAPI">
      <p className="loadingCAPI">Loading...</p>
    </div>
    )
  } else {
  return (
    <div className="mainDivCAPI">
        {countryData.map((dataObj, index) => {
            return(
            <div className="countryBoxCAPI">
                <p className="countryNameCAPI">{dataObj.country.name}</p>
                <p className="amountStarvingCAPI">People starving :{Intl.NumberFormat('fr-FR').format(dataObj.metrics.fcs.people)}</p>
                <p className="percentageStarvingCAPI">{Math.round(dataObj.metrics.fcs.prevalence * 100)}% of the countries population</p>
            </div>)
        })}
    </div>
  );
  }
}

export default CountryStatisticsAPI;