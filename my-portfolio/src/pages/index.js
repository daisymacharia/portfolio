import React from "react"
import { graphql } from 'gatsby';

import { Layout, About, Jobs, Experience, Contact } from "@components"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <About />
    <Jobs data={data.jobs.edges} />
    <Experience />
    <Contact />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
{
  jobs: 
  allMarkdownRemark {
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
}
`