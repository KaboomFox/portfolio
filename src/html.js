import React from 'react'
import PropTypes from 'prop-types'

const HTML = ({ htmlAttributes, headComponents, bodyAttributes, body, postBodyComponents, preBodyComponents }) => (
  <html lang="en" {...htmlAttributes}>
    <head>
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {headComponents}
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <noscript>This site runs best with JavaScript enabled.</noscript>
      <div
        key="body"
        id="___gatsby"
        dangerouslySetInnerHTML={{__html: body}}
      />
      {postBodyComponents}
    </body>
  </html>
);

export default HTML;

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}