import React from "react";
import styled from "@emotion/styled";
import moon from "../assets/icons/moon.png";
import sun from "../assets/icons/sun.png";

const ToggleContainer = styled("button")`
  visibility: ${({ theme }) => theme.visibility};
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.gradient};
  width: 4rem;
  height: 2.2rem;
  margin: 0 auto;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  font-size: 0.33rem;
  padding: 0.25rem;
  overflow: hidden;
  cursor: pointer;
  position: absolute;
  color: #eece1a;
  z-index: 0;
  left: 50px;
  top: 20px;

  img {
    max-width: 1.5rem;
    height: auto;
    transition: all 0.3s linear;

    &:first-of-type {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(0)" : "translateY(100px)"};
    }

    &:nth-of-type(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <ToggleContainer lightTheme={theme} onClick={toggleTheme.toggleTheme}>
      <img
        src={moon}
        width="124"
        height="124"
        alt="Dark Mode"
        title="Switch to Light Mode"
      />

      <img
        src={sun}
        width="124"
        height="124"
        alt="Light mode"
        title="Switch to Dark Mode"
      />
    </ToggleContainer>
  );
};

export default Toggle;
