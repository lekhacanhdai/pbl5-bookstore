import React from 'react';
import "./home.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Narbav';
import Widget from '../../components/widget/Widget';
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table"

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="renvenue"/>
          <Widget type="books"/>
        </div>
        <div className="charts">
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <Table />
          </div>
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
      </div>
    </div>
  )
}

export default Home;