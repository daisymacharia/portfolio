import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Icon } from "@components/icons";

const StyledContainer = styled.section`
  padding-top: 50px;

  .title {
    margin: 0;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const StyledContent = styled.div`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  margin: 1rem;
  z-index: 1;
`;

const StyledImageContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  height: 100%;
  width: 100%;
`;

const StyledFeaturedImg = styled(Img)`
  width: 100%;
  height: 100%;
  max-width: 100%;
  vertical-align: middle;
  border-radius: 3px;
  position: relative;
  opacity: 0.25;
  mix-blend-mode: multiply;

  &:hover {
    mix-blend-mode: hard-light;
    opacity: 0.1;
  }
`;

const StyledTech = styled.ul`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  margin: 0;
  list-style: none;

  li {
    font-size: 13px;
    color: rgb(136, 146, 176);
    margin-right: 20px;
    margin-bottom: 0;
    white-space: nowrap;
  }
`;

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
      fill: #ffffff;
    }
  }
`;

const StyledProjectsContainer = styled.div`
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5rem;
    margin-top: 3rem;
  }
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
`;

const StyledProject = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(200px, 350px);
  background-color: #202124;

  @media (max-width: 768px) {
    grid-template-rows: minmax(15rem, 20rem);
  }

  &:nth-of-type(odd) {
    @media (min-width: 768px) {
      transform: translateY(-30px);
    }
  }

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    z-index: 1;
  }
`;

const StyledDescription = styled.div`
  height: 8rem;
  text-overflow: ellipsis;
  font-size: 0.8rem;
  overflow: hidden;
`;

const Experience = ({ data }) => {
  return (
    <StyledContainer id="projects">
      <h1>Some things I have bulit</h1>
      <StyledProjectsContainer>
        {data.map((project) => (
          <StyledProject key={project.node.frontmatter.title}>
            <StyledContent>
              <h1 className="title">{project.node.frontmatter.title}</h1>
              <StyledDescription
                dangerouslySetInnerHTML={{ __html: project.node.html }}
              />
              <StyledTech>
                {project.node.frontmatter.tech.map((skill) => (
                  <li key={skill}> {skill}</li>
                ))}
              </StyledTech>
              <StyledLinkWrapper>
                {project.node.frontmatter.github && (
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href={project.node.frontmatter.github}
                  >
                    <Icon name="GitHub" />
                  </a>
                )}
                {project.node.frontmatter.external && (
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href={project.node.frontmatter.external}
                  >
                    <Icon name="External" />
                  </a>
                )}
              </StyledLinkWrapper>
            </StyledContent>
            <StyledImageContainer>
              {project.node.frontmatter.cover && (
                <StyledFeaturedImg
                  fluid={project.node.frontmatter.cover.childImageSharp.fluid}
                  alt={project.node.frontmatter.title}
                />
              )}
            </StyledImageContainer>
          </StyledProject>
        ))}
      </StyledProjectsContainer>
    </StyledContainer>
  );
};

export default Experience;
