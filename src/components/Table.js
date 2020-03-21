import React from "react";

export default props => {
  let { regional } = props;
  return (
    <>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>State</th>
              <th>Confirmed Indian cases</th>
              <th>Confirmed Foreign cases</th>
              <th>Recovered cases</th>
              <th>Death cases</th>
            </tr>
          </thead>
          <tbody>
            {regional
              ? regional.map(
                  (
                    {
                      loc,
                      confirmedCasesForeign,
                      confirmedCasesIndian,
                      discharged,
                      deaths
                    },
                    i
                  ) => (
                    <tr key={i}>
                      <td>{++i}</td>
                      <td>{loc}</td>
                      <td>{confirmedCasesIndian}</td>
                      <td>{confirmedCasesForeign}</td>
                      <td>{discharged}</td>
                      <td>{deaths}</td>
                    </tr>
                  )
                )
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
};
