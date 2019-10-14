import React, { Fragment } from "react";
import Local_Setup from "../../../documents/Local_Setup.pdf";

const HighlightedList = props => {
  return (
    <Fragment>
      <ul
        className="item highlighetList"
        style={{ listStyleType: "none", marginTop: 0, paddingTop: 0 }}
      >
        <li>
          <b className="text-secondary textShadow">
            Some of the technologies used in this app include:
          </b>
        </li>
        <hr />
        <li>
          <b>HTML5</b> & <b>CSS3</b> <i>(On a more advance level)</i>
        </li>
        <li>
          <b>React 16</b> <i>(with Context API & React-Router 4)</i>
        </li>
        <li>
          <b>Redux</b> (<i>for 90% of the state management)</i>
        </li>
        <li>
          <b>NodeJS</b>
          <i>
            (with <b>SailsJS</b> in this particular project)
          </i>
        </li>
        <li>
          <b>MongoDB</b> <i>(for monthly local storage)</i>
        </li>
        <li>
          <b>Bootstrap 4</b> <i>(but mostly pure CSS3)</i>
        </li>
        <li>
          Google OAuth2, Drive & Spreadsheets APIs
          <i>(for OAuth, sync, and remote storage)</i>
        </li>
        <li>
          jQuery & Lodash <i>(as helper libraries)</i>
        </li>
        <li>... and so much more</li>
        <hr />

        <li style={{ listStyleType: "none", paddingBottom: ".5rem" }}>
          <a
            href="#!"
            id="video"
            className="icons textShadow"
            onClick={props.openVideo}
          >
            <i className="fab fa-youtube fa-2x" />
            Watch Video Preview
          </a>
        </li>

        <li style={{ listStyleType: "none" }}>
          <a
            href={Local_Setup}
            className="icons textShadow"
            download="Local_Setup"
          >
            <i className="fas fa-download fa-2x" /> Download Instructions
          </a>
        </li>
      </ul>
    </Fragment>
  );
};

export default HighlightedList;