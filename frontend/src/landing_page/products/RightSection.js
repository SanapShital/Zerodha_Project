
import React from "react";

function RightSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  LearnMore,
  googlePlay,
  AppStore,
  customLinkText,
  customLinkURL,
}) {
  return (
    <div className="container">
      <div className="row g-5 align-items-center">
        {/* Text First */}
        <div className="col-6">
          <h1 className="fw-semibold">{productName}</h1>
          <p
            className="text-muted"
            style={{ fontSize: "18px", lineHeight: "1.6" }}
          >
            {productDesription}
          </p>

          {customLinkURL && customLinkText ? (
            <div className="mb-4">
              <a
                href={customLinkURL}
                className="text-primary text-decoration-none"
              >
                {customLinkText}
              </a>
            </div>
          ) : (
            <div className="d-flex gap-4 mb-4">
              <a
                href={LearnMore}
                className="text-primary text-decoration-none"
              >
                Learn more →
              </a>
            </div>
          )}
        </div>

        {/* Image Second */}
        <div className="col-6">
          <img
            src={imageURL}
            alt="Product"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
