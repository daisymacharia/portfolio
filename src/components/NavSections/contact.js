import React from "react";
import styled from 'styled-components';
import { Icon } from '@components/icons';
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby"

const StyledContainer = styled.section` 
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    align-items: center;
    justify-content: flex-end;

    .divider {
        display: block;
        height: 4rem;
        margin-top: 2rem;
        width: 0.05rem;
        background: #949495;
        /* zoom: 1; */

        @media (max-width: 768px) {
            margin-bottom: 5px;
            width: 25px;
        }
    }

    &:after {
        content: " ";
        display: inline-block;
        height: 4rem;
        /* margin: 0 10px; */
        margin-top: 1rem;
        /* margin-bottom: 10px; */
        width: 0.05rem;
        background: #949495;
        zoom: 1;

        @media (max-width: 768px) {
            margin-bottom: 5px;
            width: 25px;
        }
    }


    /* h1 {
        ::before {
            content: " ";
            display: inline-block;
            height: 2px;
            margin: 0 10px;
            margin-bottom: 10px;
            width: 80px;
            zoom: 1;
            background-color: #223242;

            @media (max-width: 768px) {
                margin-bottom: 5px;
                width: 25px;
            }
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

            @media (max-width: 768px) {
                margin-bottom: 5px;
                width: 25px;
            }
        } */
    /* } */


    svg {
        width: 2rem;
        height: 2rem;
        fill: #fff;
        margin-top: 1rem;
        /* border: solid #007ab6; */
        padding: 8px;
        /* background-color: #007ab6; */

        &:hover {
            cursor: pointer;
            transform: translateY(-0.1rem);
            fill: #949495;
        }
    }
`
const ImageContainer = styled.div` 
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    margin-top: 1rem;

    &:hover {
        transform: scale(1.1);
        /* transform: translateY(-0.1rem); */
    }
    /* margin-right: 2rem; */
`

const Image = styled(Img)` 
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
`

const Contact = ({ data }) => {
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

    console.log(image);


    return (
        <StyledContainer id="contact">
            {/* <h1>{data[ 0 ].node.frontmatter.title}</h1> */}

            {/* <div dangerouslySetInnerHTML={{ __html: data[ 0 ].node.html }} /> */}
            <Icon name="Twitter" />

            <Icon name="Linkedin" />

            <Icon name="Github" />
            <div className="divider" />
            <ImageContainer>
                <Image fluid={image.placeholderImage.childImageSharp.fluid} alt='profile' />
            </ImageContainer>

        </StyledContainer>
    )
}

export default Contact;