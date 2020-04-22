import React from "react"

const Jobs = ({ data }) => {
    console.log(data);

    return (
        <section id="jobs">
            {data.map(job => <div>
                <h1>{job.node.frontmatter.title}</h1>
                <h1>{job.node.frontmatter.range}</h1>
                <h1>{job.node.frontmatter.location}</h1>
                <h1>{job.node.frontmatter.company}</h1>
                <div dangerouslySetInnerHTML={{ __html: job.node.html }} />
            </div>

            )}
        </section>
    )
}
export default Jobs;