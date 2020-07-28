import React from "react"
import styled from 'styled-components'
import Img from "gatsby-image"

const StyledContainer = styled.section` 

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        padding-top: 1rem;
    }
    
`

const StyledContent = styled.div` 
    @media (min-width: 768px) { 
        
    }

    a {
        text-decoration: none;
        color: #7782a0;
    }
`

const About = ({ data }) => {


    return (
        <StyledContainer id="about">
            {data.map((detail, index) => <StyledContent key={index}>
                <div dangerouslySetInnerHTML={{ __html: detail.node.html }} />
            </StyledContent>
            )}
        </StyledContainer>
    )
}

export default About;