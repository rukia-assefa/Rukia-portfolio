import React from "react";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import { Link } from "react-router-dom";

import project1 from "../assets/img/html-css-javascript-lg.jpg";
import project2 from "../assets/img/html-css-javascript.jpg";
import project3 from "../assets/img/javascript-fullstack.jpg";
import project4 from "../assets/img/mern-stack.jpg";
import project5 from "../assets/img/react-redux.jpg";
import project6 from "../assets/img/react.png";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavBar from "./NavBar";

const MainContainer = styled(Box)`
  background: #233;
  height: 100%;
`;

const CardContainer = styled(Card)`
  max-width: 345px;
  margin: 3rem auto;
`;

const Portfolio = () => {
  const projects = [
    {
      name: "Project 1",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
      consequatur magni quod nesciunt necessitatibus molestiae non
      eligendi, magnam est aliquam recusandae? Magnam soluta minus
      iste alias sunt veritatis nisi dolores!`,
      image: project1,
    },
    {
      name: "Project 2",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
      consequatur magni quod nesciunt necessitatibus molestiae non
      eligendi, magnam est aliquam recusandae? Magnam soluta minus
      iste alias sunt veritatis nisi dolores!`,
      image: project2,
    },
    {
      name: "Project 3",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
      consequatur magni quod nesciunt necessitatibus molestiae non
      eligendi, magnam est aliquam recusandae? Magnam soluta minus
      iste alias sunt veritatis nisi dolores!`,
      image: project3,
    },
    {
      name: "Project 4",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
      consequatur magni quod nesciunt necessitatibus molestiae non
      eligendi, magnam est aliquam recusandae? Magnam soluta minus
      iste alias sunt veritatis nisi dolores!`,
      image: project4,
    },
    {
      name: "Project 5",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
      consequatur magni quod nesciunt necessitatibus molestiae non
      eligendi, magnam est aliquam recusandae? Magnam soluta minus
      iste alias sunt veritatis nisi dolores!`,
      image: project5,
    },
    {
      name: "Project 6",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
      consequatur magni quod nesciunt necessitatibus molestiae non
      eligendi, magnam est aliquam recusandae? Magnam soluta minus
      iste alias sunt veritatis nisi dolores!`,
      image: project6,
    },
  ];

  return (<>
    <NavBar/>

    <MainContainer component="div">
        {/* <Link to="/">
        <Button color="primary" startIcon={<ArrowBackIcon />}>
          
        </Button>
      </Link> */}
      <Grid container justifyContent="center">
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <CardContainer>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={`Project ${i + 1}`}
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </CardContainer>
          </Grid>
        ))}
      </Grid>
    </MainContainer>
    </>
  );
};

export default Portfolio;
