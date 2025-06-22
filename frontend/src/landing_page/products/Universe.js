/*
import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3">
            <img src="media/images/images/zerodhaFundhouse.png"/>
            <p className="text-center text-muted"></p>
        </div>
         <div className="col-4 p-3">
            <img src="media/images/images/sensibullLogo.svg"/>
            <p className="text-center text-muted"></p>
        </div>
         <div className="col-4 p-3">
            <img src="media/images/images/smallcaseLogo.png"/>
            <p className="text-center text-muted"></p>
        </div>

        <div className="col-4 p-3 mt-5">
            <img src="media/images/images/streakLogo.png"/>
            <p className="text-center text-muted"></p>
        </div>
         <div className="col-4 p-3">
            <img src="media/images/images/smallcaseLogo.png"/>
            <p className="text-center text-muted"></p>
        </div>
         <div className="col-4 p-3">
            <img src="media/images/images/dittoLogo.png"/>
            <p className="text-center text-muted"></p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
*/

import React from "react";

function Universe() {
  return (
    <div className="container text-center py-5">
      <h2 className="fw-semibold">The Zerodha Universe</h2>
      <p className="text-muted mb-5">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div className="row">
        <div className="col-md-4 p-4">
          <img
            src="media/images/images/zerodhaFundhouse.png"
            alt="Fund House"
            style={{ height: "60px" }}
            className="mb-3"
          />
          <p className="text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-md-4 p-4">
          <img
            src="media/images/images/sensibullLogo.svg"
            alt="Sensibull"
            style={{ height: "60px" }}
            className="mb-3"
          />
          <p className="text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-md-4 p-4">
          <img
            src="media/images/images/tijori.svg"
            alt="Smallcase"
            style={{ height: "60px" }}
            className="mb-3"
          />
          <p className="text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 p-4">
          <img
            src="media/images/images/streakLogo.png"
            alt="Streak"
            style={{ height: "60px" }}
            className="mb-3"
          />
          <p className="text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-md-4 p-4">
          <img
            src="media/images/images/smallcaseLogo.png"
            alt="Smallcase"
            style={{ height: "60px" }}
            className="mb-3"
          />
          <p className="text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-md-4 p-4">
          <img
            src="media/images/images/dittoLogo.png"
            alt="Ditto"
            style={{ height: "60px" }}
            className="mb-3"
          />
          <p className="text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          SignUp Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
