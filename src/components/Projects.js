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
import project1 from "../assets/img/react.png";
import project3 from "../assets/img/html-css-javascript-lg.jpg";

import NavBar from "./NavBar";

const MainContainer = styled(Box)`
  background: #233;
  height: 100vh;
`;

const CardContainer = styled(Card)`
  max-width: 345px;
  margin: 3rem auto;
`;

const Portfolio = () => {
  const projects = [
    {
      name: "Project 1",
      description: `I created a book app with authentication features.
        Users can log in to the app and perform various actions such as adding a book to their list, removing a book, editing book details, and marking a book as a favorite.
        Additionally, users have the ability to log out at the end of their session.`,
      image: project1,
      liveDemoLink: "https://feb-book-library.netlify.app/",
    },
    {
      name: "Project 2",
      description: `I developed an employee app that enables users to view detailed information about employees by clicking on their image or name. 
        The app supports features like adding new employees, and it includes authentication functionalities for user login and logout.`,
      image: project1,
      liveDemoLink: "https://rukia-employee-apps.netlify.app/",
    },
    {
      name: "Project 3",
      description: `For the ABC Book Store project, I used HTML, CSS, and JavaScript. Users can  perform various actions such as adding a book to their list, removing a book, editing book details, and marking a book as a favorite.`,
      image: project3,
      liveDemoLink: "https://js-book-app.netlify.app/",
    },
  ];
  const handleLiveDemoClick = (liveDemoLink) => {
    window.open(liveDemoLink, "_blank");
  };
  return (<>
    <NavBar/>
    <MainContainer component="div">
      <Grid container justifyContent="center" >
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
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleLiveDemoClick(project.liveDemoLink)}
                >
                  Share
                </Button>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleLiveDemoClick(project.liveDemoLink)}
                >
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
