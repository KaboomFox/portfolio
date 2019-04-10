import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from '@emotion/core'
import theme from '../../config/theme'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "homepage-banner.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img css={css`
      opacity: .6;`} fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)

const HomePageBanner = () => (
  <div
    css={css`
    background: #2c414d85;
    position: relative;
    text-align: center;
    color: #1a282e;
   `}
  >
    <Image />

    <div 
      css={css`
        position:absolute;
        top: 50%;
        left:50%;
        transform: translate(-50%, -50%);
      `}>
      <h1>👋 I'm Louise Fox</h1>
      <h2> Software Engineer, Maker, DIYer and Manger</h2>
    </div>
  </div>
);

export default HomePageBanner;
