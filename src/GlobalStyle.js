import { createGlobalStyle } from "styled-components";
import reboot from "styled-reboot";
import theme from "./theme";
import tinycolor from "tinycolor2";

// Options are, of course, optional, these are the default options
const options = {
  black: "#000",
  fontFamilyBase:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontFamilyMonospace:
    'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSizeBase: "0.9rem",
  fontWeightBase: 400,
  lineHeightBase: 1.5,
  bodyColor: "#212529",
  bodyBg: "#fff",
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
  /* other styles */
`;

export default GlobalStyle;
