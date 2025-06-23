import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg:how do I activate F&O,why is my order getting rejected..." />
          <br />
          {/*
          <a href="">Track account opening</a><br />
          <a href=""> Track segment activation</a>
          <a href=""> Intraday margins</a>
          <a href="">Kite user manual</a>
          */}
          <div
            className="mt-3"
            style={{
              display: "flex",
              gap: "20px",
              whiteSpace: "nowrap",
              fontSize: "1rem",
            }}
          >
            <a href="#">Track account opening</a>
            <a href="#">Track segment activation</a>
            <a href="#">Intraday margins</a>
            <a href="#">Kite user manual</a>
          </div>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol style={{ paddingLeft: '16px', marginTop: '12px' }}>
            <li style={{ marginBottom: '12px' }}>
              <a href="" style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>Surveillance measure on scrips - June 2025</a>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <a href="" style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>Rights Entitlements listing in June 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
