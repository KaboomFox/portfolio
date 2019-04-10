import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from '@emotion/core'
// import styled from '@emotion/styled'
import theme from '../../config/theme'
import MobileNav from './mobile-nav'
import Container from './container'
import {bpMaxSM} from '../lib/breakpoints'

function NavLink({...props}) {
  return (
    <Link
      activeClassName="active"
      css={{
        textDecoration: 'none',
        color: theme.colors.off_white,
        padding: '8px 10px',
        background: 'none',
        '& + &': {marginLeft: 10},
        [bpMaxSM]: {
          display: 'none',
        },
        
        '&.active': {
            background: theme.colors.active_color,
            padding: '22px 10px'
        },
        '&:hover,&:focus': {
          background: theme.colors.active_color,
          color: theme.colors.link_color_hover,
        }
      }}
      {...props}
    />
  )
}

function HeaderLink({...props}) {
  return ( 
    <Link {...props} />
  )
}

const Header = ({
  siteTitle,
  headerLink = '/',
}) => (
  <header
    css={css`
      width: 100%;
      ${bpMaxSM} {
        padding: 35px 0 0 0;
      }
      padding: 0 20px;
      display: flex;
      align-items: center;
      height: 70px;
      border-bottom-color: ${theme.colors.off_white};
      background: #1a282e;
      z-index: 10;
      justify-content: space-between;
    `}>
        <NavLink
          to={headerLink}
          aria-label="go to homepage"
        >
          <span>{siteTitle}</span>
        </NavLink>
      <nav>
        <div>
          {/* <MobileNav /> */}
          <NavLink
            to="/blog/"
            aria-label="View blog page"
          >
            BLOG
          </NavLink>
          <NavLink
            to="/projects/"
            aria-label="View personal projects"
          >
            PROJECTS
          </NavLink>
          <NavLink
            to="/dogs/"
            aria-label="View my dogs"
          >
            DOGS
          </NavLink>
          <NavLink
            to="/resume/"
            aria-label="View resume"
          >
            RESUME
          </NavLink>
        </div>
      </nav>
  </header>
)

export default Header;

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
