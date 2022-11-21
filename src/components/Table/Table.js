import React from "react";
import classes from "./Table.module.scss";

function Table({ theadData, children }) {
  return (
    <div className={classes.table_wrapper}>
      <table className={classes.table}>
        <thead>
          <tr>
            {theadData.map((item) => {
              return <th>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export default Table;
