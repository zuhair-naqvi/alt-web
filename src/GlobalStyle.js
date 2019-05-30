import { createGlobalStyle } from "styled-components";
import reboot from "styled-reboot";
import theme from "./theme";
import tinycolor from "tinycolor2";
import BigJohn from "./assets/bigjohn.otf";
import SlimJoe from "./assets/slimjoe.otf";

// Options are, of course, optional, these are the default options
const options = {
  black: "#000",
  fontFamilyBase:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontFamilyMonospace:
    'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSizeBase: "1rem",
  fontWeightBase: 400,
  lineHeightBase: 1,
  bodyColor: theme.brandColor3,
  bodyBg: theme.brandColor1,
  headingsMarginBottom: "0.5rem",
  paragraphMarginBottom: "1rem",
  labelMarginBottom: "0.5rem",
  dtFontWeight: 700,
  linkColor: theme.brandColor3,
  linkDecoration: "none",
  linkHoverColor: tinycolor(theme.brandColor3)
    .lighten(30)
    .toHexString(),
  linkHoverDecoration: "none",
  tableCellPadding: "0.75rem",
  textMuted: "#6c757d"
};

const rebootCss = reboot(options);

const GlobalStyle = createGlobalStyle`
  ${rebootCss}
  @font-face {
    font-family: 'BigJohn';
    src: url(${BigJohn}) format("opentype");
  }
  @font-face {
    font-family: 'SlimJoe';
    src: url(${SlimJoe}) format("opentype");
  }
  body {
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;

export default GlobalStyle;
