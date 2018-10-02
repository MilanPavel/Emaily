import React from "react";

const Landing = () => {
  return (
    // header
    <div>
      <header className="main-header">
        <nav className="transparent">
          <div className="container">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">
                Emaily
              </a>
              <a
                href="#"
                data-activates="mobile-nav"
                className="button-collapse"
              >
                <i className="fa fa-bars" />
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <a className="active-link" href="index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a href="solutions.html">Features</a>
                </li>
                <li>
                  <a href="signup.html">Screenshots</a>
                </li>
                <li>
                  <a href="/auth/google" className="btn purple">
                    Login with Google
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="showcase container">
          <div className="row">
            <div className="col s12 m10 offset-m1 center">
              <h5>Welcome To Emaily</h5>
              <h1>Get the real Insights</h1>
              <p>
                Create Email Surveys for Your Customers and get valuable
                feedback about your products. Manage your campaigns/results via
                simple web interface.
              </p>
              <br />
              <br />
              <a
                href="solutions.html"
                className="btn btn-large white purple-text"
              >
                Learn More
              </a>
              <a href="signup.html" className="btn btn-large purple white-text">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="section section-icons center">
        <div className="container">
          <div className="row">
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="fa fa-user fa-3x deep-purple-text text-darken-2" />
                <h5 className="grey-text text-darken-4">Free Account</h5>
                <p>
                  No need to enter credit card number. You get up to 100 free
                  Surveys each with maximum of 1000 emails.
                </p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="fa fa-list-alt fa-3x deep-purple-text text-darken-2" />
                <h5 className="grey-text text-darken-4">Unlimited Surveys</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                  suscipit!
                </p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="fa fa-chart-bar fa-3x deep-purple-text text-darken-2" />
                <h5 className="grey-text text-darken-4">Statistics</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                  suscipit!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="page-footer deep-purple lighten-1">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">About Us</h5>
              <p className="grey-text text-lighten-4">
                This is just a demo site for educational purposes. Created by
                Milan Pavel.{" "}
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="index.html">
                    Home 1
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="solutions.html">
                    Solutions
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="signup.html">
                    Signup
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright deep-purple darken-1">
          <div className="container">
            Emaily &copy; 2018
            <a className="grey-text text-lighten-4 right" href="#!">
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
