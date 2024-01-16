import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {
  Button,
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
  Drawer,
  ListItemText
} from '@mui/material';
import {  Assessment, Home, Apps, ContactMail } from '@mui/icons-material';
import logo from '../assets/img/logo.png';
import { styled } from 'styled-components';
import Footer from './Footer';
import MenuIcon from '@mui/icons-material/Menu';


const StyledBox = styled(Box)`
width: 250px;
background: #511;
height: 100%;
`;


const StyledAvatar = styled(Avatar)`
  display: block;
  margin: 0.5rem auto;
  width: 100px; 
  height: 100px; 
`;
const ResponsiveListItem = styled(ListItem)`
  @media (max-width: 700px) {
    display: flex;
    
  }
`;
const ResponsiveListItemIcon = styled(ListItemIcon)`
  @media (max-width: 829px) {
    display: none;
    
  }
`;



const menuItems = [
  {
    listIcon: <Home />,
    listText: 'Home',
    listPath: '/'
  },
  {
    listIcon: <Assessment />,
    listText: 'Resume',
    listPath: '/resume'
  },
  {
    listIcon: <Apps />,
    listText: 'Projects',
    listPath: '/projects'
  },
  {
    listIcon: <ContactMail />,
    listText: 'Contacts',
    listPath: '/contact'
  }
];

function NavBar() {
  const[state, setState]=useState({
    right:false
  })
  const toogleSlider=((slider,open) => () => {
    setState({... state, [slider]:open})
  });
  const slideList = slider =>(
    <StyledBox   component="div"
    onClick={toogleSlider(slider,false)}
    >
      <StyledAvatar src={logo} alt='logo'/>
      <Divider/>
      <List>
        {menuItems.map((Isitem,key)=>(
      <ListItem key={key} component={Link} to={Isitem.listPath}>
      <Button>
        <ListItemIcon sx={{ color: 'tan' }}>
          {Isitem.listIcon}
          <ListItemText primary={Isitem.listText} />
        </ListItemIcon>
      </Button>
    </ListItem> 
    
     ))}

      </List>
    </StyledBox >
  )

  return (
    <>
      <Box component='nav'>
        <AppBar component='nav' style={{ background: "#222",  display: 'flex'}}>
          <Toolbar>
          <IconButton onClick={toogleSlider("right", true)}>             
           <MenuIcon style={{ color: "tomato" }} />
              
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                color: 'tomato',
                display: 'flex',
                textAlign: 'center',
                fontWeight: 700,
                flex: 1 
              }}
            >
              PORTFOLIO
            </Typography>

            <List sx={{ display: { xs: 'none', sm: 'flex', flexDirection: 'row' } }}>
              {menuItems.map((Isitem, key) => (
                <ResponsiveListItem key={key} component={Link} to={Isitem.listPath}>
                <Button>
                  <ResponsiveListItemIcon sx={{ color: 'tan' }}>{Isitem.listIcon}</ResponsiveListItemIcon>
                  <ListItemText primary={Isitem.listText} sx={{ color: 'tan' }} />
                </Button>
              </ResponsiveListItem>
              ))}
            </List>

            <Drawer
              anchor='right'
              open={state.right}
              onClose={toogleSlider("right", false)}
            >
              {slideList("right")}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor='right'
        open={state.right}
        onClose={toogleSlider("right", false)}
      >
        {slideList("right")}
        <Footer />

      </Drawer>
    </>
  );
}

export default NavBar;
