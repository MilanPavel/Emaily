// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";
import Header from "../Header";

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <div className="container">
          <SurveyFormReview
            onCancel={() => this.setState({ showFormReview: false })}
          />
        </div>
      );
    }

    return (
      <div className="container">
        <SurveyForm
          onSurveySubmit={() => this.setState({ showFormReview: true })}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyNew);
