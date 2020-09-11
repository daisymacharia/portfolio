import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@components/icons";

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 50px;
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const JobContainer = styled.div`
  /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr); */
  height: 10rem;
  width: 100%;
  background-color: rgb(40, 44, 52, 1);
  color: whitesmoke;
  margin-bottom: 1rem;
  padding: 1rem;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }

  * {
    color: whitesmoke;
  }
  .company {
    margin-left: 0.5em;
    color: #2ebbb5;
  }
  .time {
    margin-top: 3rem;
    /* grid-area: 3/1/-1/2; */
  }
`;

const Title = styled.span`
  font-size: 1rem;
`;

const Jobs = ({ data }) => {
  return (
    <StyledContainer id="jobs">
      <h1>Places I've worked</h1>
      {data.map((company, index) => (
        <StyledLink
          target="_blank"
          rel="nofollow noopener noreferrer"
          href={company.node.frontmatter.url}
        >
          <JobContainer
            key={index}
            // dangerouslySetInnerHTML={{ __html: company.node.html }}
          >
            <>
              <Title>{company.node.frontmatter.title}</Title>
              <span className="company">
                @ {company.node.frontmatter.company}
              </span>
            </>
            <div className="time">{company.node.frontmatter.range}</div>
          </JobContainer>
        </StyledLink>
      ))}
    </StyledContainer>
  );
};
export default Jobs;
