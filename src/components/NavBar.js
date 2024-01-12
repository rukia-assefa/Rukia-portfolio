import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {Button,AppBar,Toolbar,ListItem,IconButton,ListItemText,Avatar,Divider,List,Typography,Box, ListItemIcon, Drawer}from '@mui/material'
import { ArrowBack, Assessment,Home,Apps,ContactMail} from '@mui/icons-material';
import logo from "../assets/img/logo.png"
import { styled } from 'styled-components';
import Footer from './Footer';
const StyledBox = styled(Box)`
  width: 250px;
  background: #511;
  height: 100%;
`;
const StyledAvatar = styled(Avatar)`
  display: block;
  margin: 0.5rem auto;
  width: 100px; /* Adjust width as needed */
  height: 100px; /* Adjust height as needed */
`;

const menuItems =[{
  listIcon:<Home/>,
  listText:"Home",
  listPath: "/"
},
{
  listIcon:<Assessment/>,
  listText:"Resume",
  listPath: "/resume"

},{
  listIcon:<Apps/>,
  listText:"Projects",
  listPath: "/projects"

},{
  listIcon:<ContactMail/>,
  listText:"Contacts",
  listPath: "/contact"
},
]

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
      <AppBar position='static' style={{background: "#222"}}>
        <Toolbar>
          <IconButton onClick={toogleSlider("right", true)}>
              <ArrowBack style={{color:"tomato"}}/>
          </IconButton> 
          <Typography variant='h5' style={{color: "tan"}}>
            Portfolio
          </Typography>
          <Drawer 
          anchor='right'
          open={state.right}
          onClose={toogleSlider("right",false)}
          >
            {slideList("right")}
          </Drawer>
        </Toolbar>
      </AppBar>

    </Box>
    <Drawer 
          anchor='right'
          open={state.right}
          onClose={toogleSlider("right",false)}
          >
            {slideList("right")}
            <Footer /> 

     </Drawer>
    </>
  )
}

export default NavBar