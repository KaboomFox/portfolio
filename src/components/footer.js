import React from 'react'
import {css} from '@emotion/core'
import theme from '../../config/theme'
import {Twitter, GitHub, LinkedIn} from './social'

const Footer = () => (
  <footer
    css={css`
      width: 100%;
      padding: 0 20px;
      display: flex;
      align-items: center;
      height: 70px;
      color: ${theme.colors.off_white};
      border-bottom-color: ${theme.colors.off_white};
      background: #1a282e;
      z-index: 10;
      justify-content: space-between;`}>
      <p css={css`
        align-items: center;
        margin:0;
      `}>
        KaboomFox ©️ 2018-{new Date().getFullYear()}
      </p>
      <div>
        <Twitter />
        <LinkedIn />
        <GitHub />
      </div>
  </footer>
)
export default Footer