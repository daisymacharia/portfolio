import React from "react"

const Contact = ({ data }) => (
    <section id="contact">
        <h1>{data[ 0 ].node.frontmatter.title}</h1>
        <button>{data[ 0 ].node.frontmatter.title}</button>
        <div dangerouslySetInnerHTML={{ __html: data[ 0 ].node.html }} />
    </section>
)

export default Contact;