import React from "react"
import styled from 'styled-components'
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */
const StyledHero = styled.section`
    width: 50%;
    /* background: url('https://res.cloudinary.com/daisymacharia/image/upload/v1587567325/backgroung.jpg'); Photo by Kevin McCutcheon on Unsplash */
    /* height: 500px; */
    background-position: 1px;
    background-attachment: fixed;
    background-size: 100%;
    /* padding: 250px 0 100px 0; */
    
    /* @media (max-width: 768px) {
        height: 300px;
        padding: 150px 0 0 0;
    } */

`

const NameContainer = styled.h1` 
    /* margin: 0 auto; */
    /* text-align: center; */
    font-size: 4rem;
`

const Subtitle = styled.div`
    font-size: 100%;
    margin-bottom: 15px;
    color: #223242;
`

const NameComponent = styled.div`

    strong {
        text-align: center;
        font-size: 200%;
        font-family: sans-serif;
        color: #223242;
/* 
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
        } */
    }
`


const Hero = () => {

    return <StyledHero>
        <NameContainer>
            Hello, I'm <br></br>Daisy Macharia
            {/* <NameComponent> <strong> Daisy Macharia </strong></NameComponent> */}
        </NameContainer>

    </StyledHero>
}
export default Hero


