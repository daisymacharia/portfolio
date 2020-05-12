import React from "react"
import { graphql } from 'gatsby';

import { Layout, About, Jobs, Experience, Contact, HeroImage } from "@components"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <HeroImage />
    <About data={data.about.edges} />
    <Jobs data={data.jobs.edges} />
    <Experience data={data.projects.edges} />
    <Contact data={data.contact.edges} />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
{
  about: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/about/"}}) {
    edges {
      node {
        frontmatter {
          title
          skills
        }
        html
      }
    }
  },

  jobs: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/jobs/"}}, sort: {fields: frontmatter___date, order: DESC}) {
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
  },

  projects: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/experience/"}}, sort: {fields: frontmatter___date, order: DESC}) {
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
              fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
        html
      }
    }
  },
  contact: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/contact/"}}) {
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
`