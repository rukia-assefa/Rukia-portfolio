import React, { useState, useEffect } from 'react';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import logo from '../assets/img/logo.png';
import { styled } from 'styled-components';

const StyledTypography1 = styled(Typography)`
  color: tomato;
`;

const StyledAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
  margin: 50px;
`;

const StyledTypography2 = styled(Typography)`
  color: tan;
  margin-bottom: 3rem;
`;

const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
`;

function Header() {
  const [typedText, setTypedText] = useState('');
  const textArray = ['Web Design', 'Web Developer', 'MERN Stack'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedText(textArray[currentTextIndex]);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentTextIndex]);

  return (
    <>
      <StyledBox>
        <Grid container justify="center">
          <StyledAvatar src={logo} alt="logo" />
        </Grid>
        <StyledTypography1 variant="h4">{/* Your name or title */}</StyledTypography1>
        <br />
        <StyledTypography2 variant="h5">{typedText}</StyledTypography2>
      </StyledBox>
    </>
  );
}

export default Header;
