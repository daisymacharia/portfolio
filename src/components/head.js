import React from "react"
import { Helmet } from 'react-helmet';
import PropTypes from "prop-types"

const Head = ({ siteTitle }) => (
  <Helmet>
    <html lang="en" prefix="og: http://ogp.me/ns#" />
    <title itemProp="name" lang="en">
      {siteTitle}
    </title>
  </Helmet>
)

Head.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Head
