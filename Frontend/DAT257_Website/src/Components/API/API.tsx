import "./API.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const url = "https://api.hungermapdata.org/v1/foodsecurity/country";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios.get(url).then((res) => setData(res.data.countries));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "green" }}>using Axios Library to Fetch Data</h1>
      <center>
        {data.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#CD8FFD",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.country.name}</p>
            </div>
          );
        })}
      </center>
    </div>
  );
}

export default App;