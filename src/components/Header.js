import React from 'react'
import { Avatar,Box,Grid,Typography } from '@mui/material';
import logo from "../assets/img/logo.png"
import Typed from "react-typed"
import { styled } from 'styled-components';
const StyledTypography1 = styled(Typography)`
  color: tomato;
 
`;
const StyledAvatar = styled(Avatar)`
  width: 100px; /* Adjust width as needed */
  height: 100px; /* Adjust height as needed */
  margin:50px;
`;
const StyledTypography2 =styled(Typography)`
  color: tan;
  marginBottom:3rem;
`;
const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Adjust position to center */
  text-align: center;
  z-index: 1;
`;


function Header() {
  return (
<>
<StyledBox>
    <Grid container justify="center" >
        <StyledAvatar src={logo} alt='logo'/>

    </Grid>
<StyledTypography1 variant='h4'>
    <Typed strings={["Rukia Assefa"]} 
    typeSpeed={40}/>

</StyledTypography1>
<br></br>
<StyledTypography2 variant='h5'>
    <Typed strings={["Web Design","Web Developer","MERN Stack"]}
     typeSpeed={40}
     backSpeed={60}
     loop
     />

</StyledTypography2>

</StyledBox>




</>  

)}

export default Header