import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"

const StyledContainer = styled.section` 
    display: flex;
    justify-content: space-between;
    /* margin: 0 20%; */
    padding-top: 50px;
    width: 50%;

    @media (max-width: 768px) {
        flex-direction: column;
        margin: 0;
        padding: 100px 0px;
    }
    
`

const StyledAvartar = styled.a`
    box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
    width: 100%;
    /* position: relative; */
    background-color: rgb(100, 255, 218);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    border-radius: 3px;
    cursor: pointer;
    position: absolute;

    ::before {
        content: "";
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        /* background-color: rgb(10, 25, 47); */
        mix-blend-mode: screen;
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 3px;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    }

    ::after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 3px;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
        top: 20px;
        left: 20px;
        z-index: -1;
        border-width: 2px;
        border-style: solid;
        border-color: #aeb1b0;
        border-image: initial;
    }

`

const StyledImg = styled(Img)`
    filter: grayscale(100%) contrast(1);
    border-radius: 3px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s; 
`

const StyledContent = styled.div` 
    /* width: 60%; */
    /* max-width: 530px; */

    a {
        text-decoration: none;
        color: #7782a0;
    }

    @media (max-width: 768px) {
        width: unset;
        margin: auto;
    }
`

const StyledPic = styled.div` 
    position: relative;
    width: 40%;
    max-width: 300px;

    @media (max-width: 768px) {
        width: 70%;
        min-height: 200px;
        margin: 25px auto 0;
    }
`

const SkillsContainer = styled.ul` 
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 20px;
    margin: 0;
    /* list-style: none; */
`

const About = ({ data }) => {
    const image = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "self.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <StyledContainer id="about">
            {data.map(detail => <StyledContent>
                {/* <h1>{detail.node.frontmatter.title}</h1> */}
                <div dangerouslySetInnerHTML={{ __html: detail.node.html }} />
                {/* <SkillsContainer>
                    {detail.node.frontmatter.skills.map(skill => (
                        <li>{skill}</li>
                    ))}
                </SkillsContainer> */}
            </StyledContent>
            )}
            {/* <StyledPic>
                <StyledAvartar href="https://github.com/daisymacharia" target="_blank">
                    <StyledImg fluid={image.placeholderImage.childImageSharp.fluid} />
                </StyledAvartar>
            </StyledPic> */}
        </StyledContainer>
    )
}

export default About;