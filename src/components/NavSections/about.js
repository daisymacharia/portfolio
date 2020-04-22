import React from "react"

const About = ({ data }) => (
    <main id="about">
        {data.map(job => <div>
            <h1>{job.node.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: job.node.html }} />
        </div>
        )}
    </main>
)

export default About;