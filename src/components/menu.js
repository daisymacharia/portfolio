import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { navLinks } from '@config';
import styled from 'styled-components';
// import { theme, mixins, media } from '@styles';
// const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    outline: 0;
    transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
    visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
    display: none;
    @media (max-width: 48em) {
        display: block;
    }
`;

const Sidebar = styled.aside`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  width: 70vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  background: #262626fa;
`;

const NavLinks = styled.nav`
    display: flex;
    justify-content: space-between; 
    width: 100%;
    flex-direction: column;
    text-align: center;
`;

const NavList = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
`;

const NavListItem = styled.li`
  margin: 0 auto 20px;
  position: relative;
  counter-increment: item 1;
  &:before {
    display: block;
    content: '0' counter(item) '.';
    color: green; 
    margin-bottom: 5px;
  }
`;

const NavLink = styled(Link)`
  padding: 3px 20px 20px;
  width: 100%;
`;

const ResumeLink = styled.a`
  padding: 18px 50px;
  margin: 10% auto 0;
  width: max-content;
`;

const Menu = ({ menuOpen, toggleMenu }) => {
    const handleMenuClick = e => {
        const target = e.target;
        const isLink = target.hasAttribute('href');
        const isNotMenu = target.classList && target.classList[ 0 ].includes('StyledContainer');

        if (isLink || isNotMenu) {
            toggleMenu();
        }
    };

    return (
        <StyledContainer
            menuOpen={menuOpen}
            onClick={handleMenuClick}
            aria-hidden={!menuOpen}
            tabIndex={menuOpen ? 1 : -1}>
            <Sidebar>
                <NavLinks>
                    <NavList>
                        {navLinks &&
                            navLinks.map(({ url, name }, i) => (
                                <NavListItem key={i}>
                                    <NavLink to={url}>{name}</NavLink>
                                </NavListItem>
                            ))}
                    </NavList>
                    {/* <ResumeLink href="/resume.pdf" target="_blank" rel="nofollow noopener noreferrer">
            Resume
          </ResumeLink> */}
                </NavLinks>
            </Sidebar>
        </StyledContainer>
    );
};

Menu.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};

export default Menu;