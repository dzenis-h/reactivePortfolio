import React, { Fragment } from "react";

const HighlightedHeader = () => {
  return (
    <Fragment>
      <div className="text-secondary otherApps">
        <hr />
        <h3 className="specialFont bold textShadow">
          I develop software every day. Below is a shortened and adapted list of
          my projects/prototypes:{" "}
        </h3>
        <hr />
      </div>

      <p className="header-note">
        <span className="text-secondary" aria-label="dash">
          <b>
            <i>Note</i>➖{" "}
          </b>
        </span>
        Some apps may take longer to load simply because they were deployed
        using a <b style={{ color: "black" }}> "FREE TIER"</b> account.{" "}
        <br className="header-break" />
        Thank you for understanding.
      </p>
    </Fragment>
  );
};

export default HighlightedHeader;
