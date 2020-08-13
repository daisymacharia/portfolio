import React, { useEffect, useState } from "react";
import { navLinks } from "@config";
import styled from "styled-components";
import { Link } from "gatsby";
import Menu from "./menu";
// const StyledHamburger = styled.div`
//     @media (max-width: 48em) {
//         display: flex;
//         position: absolute;
//         top: 0;
//         right: 0;
//     }

// `

// const StyledHamburgerBox = styled.div`
//     position: relative;
//     display: inline-block;
//     width: 30px;
//     height: 24px;
// `

// const StyledHamburgerInner = styled.div`
//     background-color: #FFFFFF;
//     position: absolute;
//     width: 30px;
//     height: 2px;
//     top: 50%;
//     left: 0px;
//     right: 0px;
//     transition-duration: 0.22s;
//     transition-property: transform;
//     transition-delay: 0s;
//     transform: rotate(0deg);
//     transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
//     border-radius: 3px;

//     &:before, &:after {
//         content: "";
//         display: block;
//         background-color: #FFFFFF;
//         position: absolute;
//         left: auto;
//         right: 0px;
//         width: 30px;
//         height: 2px;
//         transition-timing-function: ease;
//         transition-duration: 0.15s;
//         transition-property: transform;
//         border-radius: 4px;
//     }

//     &:before {
//         width: 120%;
//         top: -10px;
//         opacity: 1;
//         transition: top 0.1s ease-in 0.25s, opacity 0.1s ease-in 0s
//     }

//     &:after {
//         width: 80%;
//         bottom: -10px;
//         transform: rotate(0deg);
//         transition: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19) 0s;
//     }
// `

const StyledHamburger = styled.div`
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  top: 0;
  position: absolute;
  right: 0;
  z-index: 11;
  @media (max-width: 48em) {
    display: flex;
  }
`;
const StyledHamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 24px;
`;
const StyledHamburgerInner = styled.div`
  background-color: #ffffff;
  position: absolute;
  width: 30px;
  height: 2px;
  border-radius: 3px;
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${(props) => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${(props) => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${(props) =>
      props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
  );
  &:before,
  &:after {
    content: "";
    display: block;
    background-color: #ffffff;
    position: absolute;
    left: auto;
    right: 0;
    width: 30px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${(props) => (props.menuOpen ? `100%` : `120%`)};
    top: ${(props) => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${(props) => (props.menuOpen ? 0 : 1)};
    transition: ${(props) =>
      props.menuOpen
        ? `top 0.1s ease-in 0.25s, opacity 0.1s ease-in 0s`
        : `top 0.1s ease-out 0s, opacity 0.1s ease-out 0.12s`};
  }
  &:after {
    width: ${(props) => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${(props) => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${(props) => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${(props) =>
      props.menuOpen
        ? `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19) 0s`
        : `bottom 0.1s ease-out 0s, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`};
  }
`;

const MobileNav = ({ toggleMenu, menuOpen }) => {
  return (
    <StyledHamburger onClick={toggleMenu}>
      <StyledHamburgerBox>
        <StyledHamburgerInner menuOpen={menuOpen} />
      </StyledHamburgerBox>
    </StyledHamburger>
  );
};

const StyledContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  font-size: 0.9rem;
`;
const StyledListItem = styled.li`
  margin: 0;
  list-style: none;
  padding: 0.5rem 0;
`;
const StyledLink = styled(Link)`
  display: inline-flex;
  text-decoration: none;
  align-items: center;

  .divider {
    width: ${(props) => (props.active ? "3rem" : "2rem")};
    height: 0.05rem;
    background: ${(props) => (props.active ? "white" : "#949495")};
    margin: 0 1rem;
  }

  &:hover {
    .divider {
      width: 3rem;
      background: white;
      transition: all 0.2s ease-in-out;
    }
    .page-number {
      color: #fff;
    }
  }
`;

const Nav = () => {
  const [open, setMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => handleResize());
    window.addEventListener("keydown", (e) => handleKeydown(e));

    return () => {
      window.removeEventListener("resize", () => handleResize());
      window.removeEventListener("keydown", (e) => handleKeydown(e));
    };
  });

  const toggleMenu = () => setMenu(!open);

  const isActive = (path) => {
    return window.location.pathname.includes(path);
  };

  const handleResize = () => {
    if (window.innerWidth > 768 && open) {
      toggleMenu();
    }
  };

  const handleKeydown = (e) => {
    if (!open) {
      return;
    }

    if (e.which === 27 || e.key === "Escape") {
      toggleMenu();
    }
  };

  return (
    <>
      <MobileNav toggleMenu={toggleMenu} menuOpen={open} />
      <StyledContainer>
        <StyledList>
          {navLinks.map(({ url, page, name }, index) => (
            <StyledListItem
              key={index}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <StyledLink to={url}>
                <span className="page-number">{page}</span>
                <span className="divider" />
                <span>{name}</span>
              </StyledLink>
            </StyledListItem>
          ))}
        </StyledList>
      </StyledContainer>
      <Menu toggleMenu={toggleMenu} menuOpen={open} />
    </>
  );
};
export default Nav;
