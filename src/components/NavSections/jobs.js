import React, { useState } from "react"
import styled from 'styled-components'
import { Icon } from '@components/icons';

const StyledContainer = styled.section` 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`


const JobContainer = styled.div` 
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3,1fr);
    height: 10rem;
    width: 100%;
    background-color:  rgb(40, 44, 52,1);
    color: whitesmoke;
    margin-bottom: 1rem;
    padding: 1rem;

    &:hover {
        transform: scale(1.1);
        transition: all .2s ease-in-out;
    }

    * {
        color: whitesmoke;
    }
    .company {
        display: flex;
        justify-content: space-between;
    }
    .time {
        /* grid-area: 3/1/-1/2; */
    }
`

const Title = styled.div` 
    font-size: 1.4rem;
`


const Jobs = ({ data }) => {
    console.log(data);

    const [ activeTab, setActiveTab ] = useState(data[ 1 ].node.frontmatter.company);
    const onClickTabItem = tab => {
        setActiveTab(tab);
    };

    return (
        <StyledContainer id="jobs">
            {/* <h1>Here's what I've done so far</h1> */}
            {data.map((company, index) => <JobContainer key={index}
            // dangerouslySetInnerHTML={{ __html: company.node.html }}
            >
                <div className="company">
                    {company.node.frontmatter.company}
                    <a href={company.node.frontmatter.url}>
                        <Icon name="External" />
                    </a>
                </div>
                <Title>{company.node.frontmatter.title}</Title>

                <div className="time">
                    {company.node.frontmatter.range}
                </div>
            </JobContainer>
            )}
        </StyledContainer>
    )
}
export default Jobs;