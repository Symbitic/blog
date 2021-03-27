import Typography, { TypographyOptions, VerticalRhythm } from 'typography';
import gray from 'gray-percentage';
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants"

const theme = {
  title: 'Noto Sans Theme',
  baseFontSize: '16px',
  baseLineHeight: 1.75,
  scaleRatio: 5 / 2,
  headerFontFamily: [ 'Noto Sans', 'serif' ],
  bodyFontFamily: [ 'Noto Sans', 'serif' ],
  bodyColor: 'hsla(0,0%,0%,0.9)',
  headerWeight: 900,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }: VerticalRhythm, options: TypographyOptions) => ({
    hr: {
      background: 'var(--hr)'
    },
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      fontStyle: "italic",
      paddingLeft: rhythm(13 / 16),
      marginLeft: rhythm(-1),
      borderLeft: `${rhythm(3 / 16)} solid ${gray(10)}`,
      borderLeftColor: 'inherit',
      opacity: '0.8'
    },
    ul: {
      listStyle: "disc",
    },
    "h1,h2,h3,h4,h5,h6": {
      marginTop: rhythm(2),
    },
    h4: {
      letterSpacing: "0.140625em",
      textTransform: "uppercase",
    },
    h6: {
      fontStyle: "italic",
    },
    a: {
      boxShadow: "0 1px 0 0 currentColor",
      textDecoration: "none",
      color: 'var(--textLink)'
    },
    "blockquote > :last-child": {
      marginBottom: 0,
    },
    "blockquote cite": {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    "blockquote cite:before": {
      content: '"— "',
    },
    "ul,ol": {
      marginLeft: 0,
    },
    "a:hover,a:active": {
      boxShadow: "none",
    },
    "mark,ins": {
      background: "#007acc",
      color: "white",
      padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
      textDecoration: "none",
    },
    'a.gatsby-resp-image-link': {
      boxShadow: 'none'
    },
    'a.anchor': {
      boxShadow: 'none'
    },
    'a.anchor svg[aria-hidden="true"]': {
      stroke: 'var(--textLink)'
    },
    'p code': {
      fontSize: '1rem'
    },
    'h1 code, h2 code, h3 code, h4 code, h5 code, h6 code': {
      fontSize: 'inherit'
    },
    'li code': {
      fontSize: '1rem'
    },
    'blockquote.translation': {
      fontSize: '1em'
    },
    [MOBILE_MEDIA_QUERY]: {
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16),
      },
      "ul,ol": {
        marginLeft: rhythm(1),
      },
    },
  }),
};

const typography = new Typography(theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const { rhythm, scale } = typography;
