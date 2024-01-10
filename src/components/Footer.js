import React from "react";
import { styled } from "@mui/system";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";

const StyledBottomNavigation = styled(BottomNavigation)`
  background: #222;
  height: 55px;
  overflow: hidden;
`;

const StyledBottomNavigationAction = styled(BottomNavigationAction)`
  .MuiSvgIcon-root {
    fill: tan;
    transition: fill 0.3s ease;
  }

  &:hover {
    .MuiSvgIcon-root {
      fill: tomato;
      font-size: 1.8rem;
    }
  }
`;

const Footer = () => {
  return (
    <StyledBottomNavigation>
      <StyledBottomNavigationAction icon={<Facebook />} />
      <StyledBottomNavigationAction icon={<Twitter />} />
      <StyledBottomNavigationAction icon={<Instagram />} />
    </StyledBottomNavigation>
  );
};

export default Footer;
