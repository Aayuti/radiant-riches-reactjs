import React from 'react'
// import styled from 'styled-components';
import '../styles/Button.scss';

const Button = ({children, style, onClick}) => {

  const handleClick = () => {
    console.log('Clicked');
  };

  return (
    <button className='buttonText' onClick={handleClick}>
      Best Choice
    </button>
  )
}

export default Button
