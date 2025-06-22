

import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  LearnMore,
  googlePlay,
  AppStore,
  coinLink,
}) {
  return (
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-6">
          <img
            src={imageURL}
            alt="Product"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="col-6">
          <h1 className="fw-semibold">{productName}</h1>
          <p className="text-muted" style={{ fontSize: "18px", lineHeight: "1.6" }}>
            {productDesription}
          </p>

          {coinLink ? (
            <div className="mb-4">
              <a href={coinLink} className="text-primary text-decoration-none">
                Coin →
              </a>
            </div>
          ):(

          <div className="d-flex gap-4 mb-4">
            <a href={tryDemo} className="text-primary text-decoration-none">
              Try demo →
            </a>
            <a href={LearnMore} className="text-primary text-decoration-none">
              Learn more →
            </a>
          </div>
          )}
          <div className="d-flex gap-3">
            <a href={googlePlay}>
              <img
                src="media/images/images/googlePlayBadge.svg"
                alt="Google Play"
                style={{ height: "45px" }}
              />
            </a>
            <a href={AppStore}>
              <img
                src="media/images/images/appstoreBadge.svg"
                alt="App Store"
                style={{ height: "45px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;

