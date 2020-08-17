/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { Head, Nav } from "./";
import "./layout.css";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 3rem 2rem;

  .fixed-top {
    z-index: 2;
    width: 100%;
    top: 0;
    height: 2rem;
    position: fixed;
    background: linear-gradient(0deg, rgba(21, 21, 21, 0), #151515);
  }

  .fixed-bottom {
    width: 100%;
    height: 2rem;
    bottom: 0;
    position: fixed;
    background: linear-gradient(180deg, rgba(21, 21, 21, 0), #151515);
  }
`;
const StyledContent = styled.main`
  @media (min-width: 768px) {
    display: grid;
    grid-auto-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    grid-gap: 1rem;
  }

  display: grid;
  grid-auto-columns: 1fr;
`;
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <StyledPage>
      <div className="fixed-top" />
      <Head siteTitle={data.site.siteMetadata.title} />
      {/* <Nav /> */}
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      > */}
      <StyledContent>{children}</StyledContent>
      <div className="fixed-bottom" />
      {/* </div> */}
    </StyledPage>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
