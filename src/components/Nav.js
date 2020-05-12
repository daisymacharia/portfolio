import React from 'react';
import { navLinks } from '@config';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 11;
    width: 100%;
    background-color: #fff;
    height: 100px;
    padding: 0 18px;
    box-shadow: 0 1px 3px rgba(0,0,0,.4);
`

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    /* width: 100%; */
    color: rgb(204, 214, 246);
    font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace;
    z-index: 12;
    font-size: 13px;
`

const StyledList = styled.ul`
    display: flex;
    padding: 0;
    list-style: none;
    float: right;
    margin: 0;
    align-items: center;
    justify-content: space-between;
    
`
const StyledListItem = styled.li`
    margin: 0 10px;

`
const StyledLink = styled(Link)`
  padding: 12px 10px;
  text-decoration: none;
`


const Nav = () => (
    <StyledContainer>
        <div></div>
        <StyledNav>

            <StyledList>
                {navLinks.map(({ url, name }, i) => (
                    <StyledListItem key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                        <StyledLink to={url}>{name}</StyledLink>
                    </StyledListItem>
                ))}
            </StyledList>
        </StyledNav>
    </StyledContainer>

)

export default Nav