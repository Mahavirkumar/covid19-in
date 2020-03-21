import React from "react";

export default props => {
  let { summary } = props;
  return (
    <>
      <div className="row">
        <div className="card">
          <p>Total Cases</p>

          <span className="stat">{summary.total}</span>
        </div>

        <div className="card">
          <p>Indian Cases</p>

          <span className="stat">{summary.confirmedCasesIndian}</span>
        </div>

        <div className="card">
          <p>Foreign Cases</p>

          <span className="stat">{summary.confirmedCasesForeign}</span>
        </div>

        <div className="card">
          <p>Recovered Cases</p>

          <span className="stat">{summary.discharged}</span>
        </div>

        <div className="card">
          <p>Death Cases</p>

          <span className="stat">{summary.deaths}</span>
        </div>
      </div>
    </>
  );
};
