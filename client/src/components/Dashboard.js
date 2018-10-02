import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";
import Header from "./Header";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large blue">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
