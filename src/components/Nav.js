import React from 'react';
import { navLinks } from '@config';
// import styled from 'styled-components';
import { Link } from 'gatsby';


const Nav = () => (
    <div style={{ margin: `3rem auto`, maxWidth: 650 }}>
        <header style={{ marginBottom: `1.5rem` }}>
            <ul style={{ listStyle: `none`, float: `right` }}>
                {navLinks.map(({ url, name }, i) => (
                    <li key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                        <Link to={url}>{name}</Link>
                    </li>
                ))}
            </ul>
        </header>
    </div>
)

export default Nav