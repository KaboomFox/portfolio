import React from 'react';
import { css, keyframes } from '@emotion/core'


const multipleShadows = (numberOfStars) => {
  const defaultRandomGuess = 2000;
  const starBoxs = Array(numberOfStars).fill().map((_, i) => `${Math.floor(Math.random() * defaultRandomGuess) + 1}px ${Math.floor(Math.random() * defaultRandomGuess) + 1}px #FFF`);
  return starBoxs.join(', ');
}

const starMotion = keyframes`
  from {
    transform: translateY(0px);
  } 
  to {
    transform: translateY(-2000px);
  }
`;


const Stars = ({numberOfStars, speed , size}) => (
  <div  
    css={css`
      width: ${size}px;
      height: ${size}px;
      background: transparent;
      box-shadow: ${multipleShadows(numberOfStars)};
      animation-name: ${starMotion};
      animation-duration: ${speed}s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      `}
  />
);

const StarryNight = () => (
  <div css={
    css`
    background: radial-gradient(ellipse at bottom, #1b2737 0%, #090A0F 100%);
    overflow: hidden;
    height: 600px;
  `}>
    <Stars numberOfStars={700} speed={50}  size={1}/>
    <Stars numberOfStars={300} speed={100} size={2}/>
    <Stars numberOfStars={500} speed={150} size={3}/>
  </div>
);

export default StarryNight;