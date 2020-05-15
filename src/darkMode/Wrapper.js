import styled from "@emotion/styled";
// import { css } from "emotion/core";

// const ls = localStorage.getItem("menu");
// console.log(ls);

export const Wrapper = styled("div")`
  background: ${(props) => props.theme.background};
`;

export const MenuWrapper = styled("div")`
  background: ${(props) => props.theme.background};
  button {
    visibility: hidden;
  }
`;

// export const AboutInfo = styled("small")`
//   color: ${(props) => props.theme.small};
// `;

// export const MenuText = styled("div")`
//   color: ${(props) => props.theme.menu};
// `;
