import React, { useState, useEffect } from "react";
import Summary from "./components/Summary";
import Table from "./components/Table";

import "./styles.css";

export default function App() {
  const [summary, setSummary] = useState({});
  const [regionalData, setRegionalData] = useState([]);
  const api = "https://api.rootnet.in/covid19-in/stats/latest";

  useEffect(() => {
    (async () => {
      let res = await fetch(api);
      res = await res.json();
      setSummary(res.data.summary);
      setRegionalData(res.data.regional);
    })();
  }, []);
  return (
    <div className="App">
      <h1>Be safe! Wash your hands!! #GoCoronaGo</h1>
      <Summary summary={summary} />
      <Table regional={regionalData} />
    </div>
  );
}
