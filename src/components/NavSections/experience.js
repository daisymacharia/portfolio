import React from "react"

const Experience = ({ data }) => (
    <section id="projects">
        {data.map(project => <div>
            <h1>{project.node.frontmatter.title}</h1>
            <a href={project.node.frontmatter.github}>github</a>
            <a href={project.node.frontmatter.external}> External Link</a>
            <div dangerouslySetInnerHTML={{ __html: project.node.html }} />
            {project.node.frontmatter.tech.map(skill => <div> {skill}</div>)}
        </div>

        )}
    </section>
)

export default Experience;