import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import {
  Layout,
  About,
  Jobs,
  Experience,
  Contact,
  HeroImage,
  Nav,
} from "@components";
import Image from "../components/image";
import SEO from "../components/seo";

const StaticArea = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 4rem 1fr;
    grid-gap: 1rem;
    grid-column: 1/2;
    position: fixed;
    width: calc(50% - 5rem);
    height: 100%;
  }

  display: flex;
  flex-direction: column-reverse;
  position: relative;
  padding: 0;

  .main {
    display: flex;
    flex-direction: column;
  }
`;

const ScrollableArea = styled.div`
  @media (min-width: 768px) {
    position: relative;
    grid-column: 2;
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <StaticArea>
      <Contact data={data.contact.edges} />
      <div className="main">
        <HeroImage />
        <About data={data.about.edges} />
        <Nav />
      </div>
    </StaticArea>
    <ScrollableArea>
      <Jobs data={data.jobs.edges} />
      <Experience data={data.projects.edges} />
      <footer
        style={{ display: "flex", justifyContent: "center", margin: "50px 0" }}
      >
        © {new Date().getFullYear()}, Built by Daisy Macharia
        {` `}
      </footer>
    </ScrollableArea>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  {
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            skills
          }
          html
        }
      }
    }

    jobs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/jobs/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            range
            location
            date(fromNow: true, locale: "")
            company
            url
          }
          html
        }
      }
    }

    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/experience/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            tech
            github
            title
            external
            date
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 700
                  quality: 90
                  traceSVG: { color: "#64ffda" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          html
        }
      }
    }

    contact: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/contact/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            button
            title
          }
        }
      }
    }
  }
`;
