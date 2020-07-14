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
    @media (min-width: 768px) {
        background-position: 1px;
        background-attachment: fixed;
        background-size: 100%;
    }

`
const NameContainer = styled.h1` 
    font-size: 4rem;
`

const Hero = () => {

    return <StyledHero>
        <NameContainer>
            Hello, I'm <br></br>Daisy Macharia
        </NameContainer>

    </StyledHero>
}
export default Hero


