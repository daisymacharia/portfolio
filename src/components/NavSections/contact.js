import React from "react"
import styled from 'styled-components'
import { Icon } from '@components/icons'

const StyledContainer = styled.section` 
    display: flex;
    flex-direction: column;
    margin: 0 20%;
    padding-top: 100px;
    align-items: center;

    h1 {
        ::before {
            content: " ";
            display: inline-block;
            height: 2px;
            margin: 0 10px;
            margin-bottom: 10px;
            width: 80px;
            zoom: 1;
            background-color: #223242;
        }

        ::after {
            content: " ";
            display: inline-block;
            height: 2px;
            margin: 0 10px;
            margin-bottom: 10px;
            width: 80px;
            zoom: 1;
            background-color: #223242;
        }
    }


    svg {
        width: 50px;
        height: 50px;
        fill: #fff;
        border: solid #007ab6;
        padding: 8px;
        background-color: #007ab6;
    }
`

const Contact = ({ data }) => (
    <StyledContainer id="contact">
        <h1>{data[ 0 ].node.frontmatter.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: data[ 0 ].node.html }} />
        <Icon name="Linkedin" />
    </StyledContainer>
)

export default Contact;