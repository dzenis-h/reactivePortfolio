// I little bit of JSS never hurts :)
const white = "#FFFFFF";
const orginal = "#444";
const black = "black";

const themeLight = {
  background: orginal,
  body: white,
  toggleBorder: black,
  gradient: "linear-gradient(315deg, #bdd4e7 0%, #444 74%);",
};

const themeDark = {
  background: black,
  body: orginal,
  toggleBorder: orginal,
  gradient: "linear-gradient(#39598A, #79D7ED)",
};

const theme = (mode) => (mode === "dark" ? themeDark : themeLight);

export default theme;
