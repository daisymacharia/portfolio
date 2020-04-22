/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';

import { Head, Nav } from "./"
import "./layout.css"

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

`
const StyledContent = styled.main` 

`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledPage>
      <Head siteTitle={data.site.siteMetadata.title} />
      <Nav />
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      > */}
      <StyledContent>{children}</StyledContent>
      <footer>
        © {new Date().getFullYear()}, Built with
          {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
      {/* </div> */}
    </StyledPage>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
