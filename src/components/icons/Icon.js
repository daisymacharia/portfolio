import React from 'react';
import PropTypes from 'prop-types';
import { Github, Linkedin, Codepen, Instagram, Twitter, External } from '@components/icons';

const Icon = ({ name }) => {
    switch (name) {
        case 'Github':
            return <Github />;
        case 'Linkedin':
            return <Linkedin />;
        case 'Codepen':
            return <Codepen />;
        case 'Instagram':
            return <Instagram />;
        case 'Twitter':
            return <Twitter />;
        case "External":
            return <External />
        default:
            return <Github />;
    }
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Icon;