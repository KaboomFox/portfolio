import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from 'gatsby'
import styled from '@emotion/styled'

import {css} from '@emotion/core'
import theme from '../../config/theme'
import {bpMaxMD, bpMaxSM} from '../lib/breakpoints'
import StarryNight from '../components/StarryNight';
const PostTitle = styled.h3`
  ${'' /* margin-bottom: ${rhythm(0.3)}; */}
  transition: ${theme.transition.ease};
  font-size: 22px;
  :hover {
    color: ${theme.brand.primary};
    transition: ${theme.transition.ease};
  }
`

const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
`



export default function Index({data: {allMdx}}) {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div
        css={css`
        background: #2c414d85;
        position: relative;
        text-align: center;
        color: ${theme.brand.secondary};
      `}
      >
      <StarryNight />

      <div 
        css={css`
          position:absolute;
          top: 50%;
          left:50%;
          transform: translate(-50%, -50%);
        `}>
        <h1>👋 I'm Louise Fox</h1>
        <h2> Software Engineer, Maker, DIY'er and Manager</h2>
      </div>
    </div>
  
      <div
        css={css`
          position: relative;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: auto 20%;
          padding: 40px 80px 60px 80px;
          ${bpMaxMD} {
             padding: auto;
          }
          ${bpMaxSM} {
            border-radius: 0;
          }
          h2 {
          }
        `}
      >
        <div>
          <h1 css={css`
          text-align:center;
          margin: 20px 0px 50px 0px;`}>Blog</h1>
          {allMdx.edges.map(({node: post}) => (
            <div
              key={post.id}
            >
              <Link
                to={post.fields.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                <PostTitle>{post.frontmatter.title}</PostTitle>
              </Link>
              <Description>
                {post.excerpt}{' '}
                <Link
                  to={post.fields.slug}
                  aria-label={`View ${post.frontmatter.title}`}
                >
                  Read →
                </Link>
              </Description>
              <span />
            </div>
          ))}
          <Link to="/blog" aria-label="Visit blog page">
            View all articles
          </Link>
        </div>
      </div>  
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(
      limit: 5
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {
        frontmatter: {published: {ne: false}, unlisted: {ne: true}}
        fileAbsolutePath: {regex: "//content/blog//"}
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            keywords
          }
        }
      }
    }
  }
`