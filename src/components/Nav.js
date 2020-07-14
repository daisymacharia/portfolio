import React from 'react';
import { navLinks } from '@config';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledContainer = styled.div`
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
    }
    @media (max-width: 767px) {
        display: flex;
        top: 0;
        position: absolute;
    }
`

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    font-size: 0.9rem;
`
const StyledListItem = styled.li`
    margin: 0;
    list-style: none;
    padding: 0.5rem 0;

    

`
const StyledLink = styled(Link)`
    display: inline-flex;
    text-decoration: none;
    align-items: center;

    .divider {
        width: ${props => props.active ? '3rem' : '2rem'};
        height: 0.05rem;
        background: ${props => props.active ? 'white' : '#949495'}; 
        margin: 0 1rem;
    }

    &:hover {
        .divider{
            width: 3rem;
            background: white;
            transition: all .2s ease-in-out;
        }
        .page-number{
            color: #fff;
        }
        
    }
`


const Nav = () => {
    console.log(window.location.hash);

    const isActive = (path) => {

        return window.location.pathname.includes(path)
    }

    return (
        <StyledContainer>
            {/* <Icon></Icon> */}
            <StyledList>
                {navLinks.map(({ url, page, name }, index) => (
                    <StyledListItem key={index} style={{ transitionDelay: `${index * 100}ms` }}>
                        <StyledLink to={url} >
                            <span className='page-number'>{page}</span>
                            <span className='divider' />
                            <span>{name}</span>
                        </StyledLink>
                    </StyledListItem>
                ))}
            </StyledList>
        </StyledContainer>
    )
}
export default Nav