import React from "react";
import styled from "styled-components";
import { Icon } from "@components/icons";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const StyledContainer = styled.section`
  display: flex;
  flex-direction: row-reverse;
  margin: 2rem 0;
  align-items: center;
  justify-content: flex-end;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-end;
  }

  .divider {
    display: block;
    height: 4rem;
    margin-top: 2rem;
    width: 0.05rem;
    background: #949495;

    @media (max-width: 767px) {
      margin-left: 2rem;
      width: 0;
      height: 0;
      margin-top: 0;
    }
  }

  &:after {
    content: " ";
    display: inline-block;
    height: 4rem;
    margin-top: 1rem;
    width: 0.05rem;
    background: #949495;
    zoom: 1;

    @media (max-width: 767px) {
      margin-right: 2rem;
      width: 0;
      height: 0;
      margin-top: 0;
    }
  }

  svg {
    width: 2rem;
    height: 2rem;
    fill: #fff;
    margin-top: 1rem;
    padding: 8px;

    @media (max-width: 767px) {
      margin-top: 0;
      margin-left: 2rem;
    }

    &:hover {
      cursor: pointer;
      transform: translateY(-0.1rem);
      fill: #949495;
    }
  }
`;
const ImageContainer = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-top: 0;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const Image = styled(Img)`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
`;

const Contact = ({ data }) => {
  const image = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "self.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

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
        <Image
          fluid={image.placeholderImage.childImageSharp.fluid}
          alt="profile"
        />
      </ImageContainer>
    </StyledContainer>
  );
};

export default Contact;
