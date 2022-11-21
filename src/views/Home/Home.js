import React from "react";
import Table from "../../components/Table/Table";
import classes from "./Home.module.scss";

function Home() {
  const theadData = [
    "Property Name",
    "Property Type",
    "Building Size (SF)",
    "Year Built",
  ];
  return (
    <div className={classes.home}>
      <div className={classes.search_wrap}>
        <input
          type="text"
          name="search"
          className={classes.input_field}
          placeholder="Search"
        />
      </div>
      <Table theadData={theadData}>
        <tr>
          <td>7155 S Buffalo D</td>
          <td>Condo</td>
          <td>1500SF</td>
          <td>2014</td>
        </tr>
        <tr>
          <td>7155 S Buffalo D</td>
          <td>Condo</td>
          <td>1500SF</td>
          <td>2014</td>
        </tr>
        <tr>
          <td>7155 S Buffalo D</td>
          <td>Condo</td>
          <td>1500SF</td>
          <td>2014</td>
        </tr>
      </Table>
    </div>
  );
}

export default Home;
