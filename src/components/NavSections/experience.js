import React from "react"
import styled from 'styled-components'
import Img from 'gatsby-image';
import { Icon } from '@components/icons';

const StyledContainer = styled.section`  
    /* margin: 0 20%; */
    padding-top: 50px;

    @media (max-width: 768px) {
        margin: 0;
        padding: 100px 0;
    }
`

const StyledContent = styled.div` 
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;    
`

const StyledImageContainer = styled.a` 
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;

    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        mix-blend-mode: screen;
    }
`

const StyledFeaturedImg = styled(Img)` 
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
    border-radius: 3px;
    position: relative;
    mix-blend-mode: multiply;
`

const StyledTech = styled.ul` 
    position: relative;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    padding: 0px;
    margin: 25px 0px 10px;
    list-style: none;

    li {
        font-size: 13px;
    color: rgb(136, 146, 176);
    margin-right: 20px;
    margin-bottom: 7px;
    white-space: nowrap;
    }
`

const StyledLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  color: #f5f5f5;
  a {
    padding: 10px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

const StyledProject = styled.div` 

    height: 10rem;
    width: 100%;
    background-color:  rgb(40, 44, 52,1);
    color: whitesmoke;
    margin-bottom: 2rem;
    overflow: hidden; /*remove after */

    /* display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    margin-bottom: 100px;

    &:last-of-type {
        margin-bottom: 0;
    }

    &:nth-of-type(odd) {
        ${StyledContent} {
            grid-column: 7 / -1;
            text-align: right;
        }

        ${StyledImageContainer} {
            grid-column: 1 / 8;
        }
        ${StyledTech} {
            justify-content: flex-end;
        }
        ${StyledLinkWrapper} {
            justify-content: flex-end;
        }
        
    } */
`

const StyledDescription = styled.div` 
    /* box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
    position: relative;
    z-index: 2;
    background-color: rgb(23, 42, 69);
    color: rgb(168, 178, 209);
    font-size: 15px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    padding: 25px;
    border-radius: 3px;

    a {
        text-decoration: none;
        color: #f5f5f5;
    } */
`

const Experience = ({ data }) => {
    console.log(data);

    return (
        <StyledContainer id="projects">
            <h1>Some things I have bulit</h1>
            {data.map(project => <StyledProject key={project.node.frontmatter.title}>
                <StyledContent>
                    <h1>{project.node.frontmatter.title}</h1>
                    <StyledDescription dangerouslySetInnerHTML={{ __html: project.node.html }} />
                    <StyledTech>{project.node.frontmatter.tech.map(skill => <li key={skill}> {skill}</li>)}</StyledTech>
                    <StyledLinkWrapper>
                        {project.node.frontmatter.github && <a href={project.node.frontmatter.github}><Icon name="GitHub" /></a>}
                        {project.node.frontmatter.external && <a href={project.node.frontmatter.external}> <Icon name="External" /></a>}
                    </StyledLinkWrapper>
                </StyledContent>
                <StyledImageContainer
                    href={project.node.frontmatter.external ? project.node.frontmatter.external : project.node.frontmatter.github ? project.node.frontmatter.github : '#'}
                    target="_blank"
                    rel="nofollow noopener noreferrer">
                    {project.node.frontmatter.cover &&
                        <StyledFeaturedImg fluid={project.node.frontmatter.cover.childImageSharp.fluid} alt={project.node.frontmatter.title} />}
                </StyledImageContainer>

            </StyledProject>

            )}
        </StyledContainer>
    )
}

export default Experience;