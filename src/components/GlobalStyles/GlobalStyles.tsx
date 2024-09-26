import { FC } from 'react';
import { Global, css } from '@emotion/react';
import 'modern-normalize';
import { theme } from '@/constants';
import { geologicaBold, geologicaSemiBold,geologicaRegular, delaGothicOneRegular } from '@/fonts';

const GlobalStyles: FC = () => (
  <Global
    styles={css`
      @font-face {
        font-family: ${theme.fontFamily.geologica};
        src: local(${theme.fontFamily.geologica}),
          url(${geologicaBold}) format('truetype');
        font-weight: 700;
      }

      @font-face {
        font-family: ${theme.fontFamily.geologica};
        src: local(${theme.fontFamily.geologica}),
          url(${geologicaSemiBold}) format('truetype');
        font-weight: 600;
      }

      @font-face {
        font-family: ${theme.fontFamily.geologica};
        src: local(${theme.fontFamily.geologica}),
          url(${geologicaRegular}) format('truetype');
        font-weight: 400;
      }

      @font-face {
        font-family: ${theme.fontFamily.delaGothicOne};
        src: local(${theme.fontFamily.delaGothicOne}),
          url(${delaGothicOneRegular}) format('truetype');
        font-weight: 400;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
      }

      ul,
      ol {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }

      button {
        cursor: pointer;
      }

      a {
        text-decoration: none;
      }
    `}
  />
);

export default GlobalStyles;
