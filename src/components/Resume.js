import React from 'react';
import { styled, ThemeProvider } from 'styled-components';
import { Typography, Box,Grid} from '@mui/material';
import NavBar from './NavBar';
import { createTheme } from '@mui/material/styles'; 
import CardContent from '@mui/material/CardContent';
import CardActionArea from "@mui/material/CardActionArea";

const StyledMainContainer = styled(Box)`
  background: #233;
`;


const YearLabel = styled(Typography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '30rem',
  fontSize: '5px',
  background: 'tomato',
  color: 'white',
  lineHeight: 1,
  padding: 'auto',
  margin: '0 auto',
  position: 'absolute',
  top: '-2.5rem', // Adjusted position to move the year label up
  left: '50%',
  transform: 'translateX(-50%)',

  [theme.breakpoints.down('sm')]: {
    width: '5rem',
    fontSize: '1.5rem',
    padding: '0.2rem  0.5rem',
  },
}));



const StyledHeading = styled(Box)`
  color: tomato;
  padding: 3rem 0;
  textTransform: uppercase;
  font-size: 2.5rem; /* Adjust the font size to make the heading bigger */
`;

const StyledSubHeading = styled(Box)`
  color: #fff;
  padding: 0;
  textTransform: uppercase;
  position: relative;
  margin-top: 2rem; /* Adjust margin for space between YearLabel and arrow */
`;
const StyledNameContactBox = styled(Box)`
  color: #fff;
  text-align: center;
  padding: 2rem 0;
`;


const ProfessionalSummaryCard = styled(Box)`
  max-width: 600px;
  margin: 3rem auto;
`;
const StyledTechnicalSkills = styled(Box)`
  color: #fff;
  padding: 3rem 0;

  /* Center the list */
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0 auto; /* Center the list */
    text-align: left; /* Align list items to the left */
    max-width: 600px; /* Limit the width of the list */
  }

  li {
    margin-bottom: 0.5rem; /* Adjust space between list items */
    position: relative;
    padding-left: 1.5em; /* Adjust space between bullet point and text */
  }

  li::before {
    content: "\\2022"; /* Add bullet point */
    color: tomato;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
    position: absolute;
  }
`;
const StyledTimeLine = styled(Box)`
  position: relative;
  padding: 1rem;
  margin: 0 auto;

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    border: 1px solid tan;
    right: 40px;
    top: 0;
  }

  &:after {
    content: "";
    display: table;
    clear: both;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 2rem;

    &:before {
      left: calc(50% - 1px);
      right: auto;
    }
  }
`;

const StyledTimeLineItem = styled(Box)`
  padding: 1rem;
  border-bottom: 2px solid tan;
  position: relative;
  margin: 1rem 3rem 1rem 1rem;
  clear: both;

  &:after {
    content: "";
    position: absolute;
  }

  &:before {
    content: "";
    position: absolute;
    right: -0.625rem;
    top: calc(50% - 5px);
    border-style: solid;
    border-color: tomato tomato transparent transparent;
    border-width: 0.625rem;
    transform: rotate(45deg);
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 44%;
    margin: 1rem;

    &:nth-of-type(2n) {
      float: right;
      margin: 1rem;
      border-color: tan;
    }

    &:nth-of-type(2n):before {
      right: auto;
      left: -0.625rem;
      border-color: transparent transparent tomato tomato;
    }
  }
`;



function Resume() {
  const muiTheme = createTheme();

  return (
    <>
      <NavBar />
      <ThemeProvider theme={muiTheme}>
        <StyledMainContainer component="header">
        <StyledNameContactBox>
            <Typography variant="h4">Rukia Assefa</Typography>
            <Typography variant="body1" color="tomato">
              (703) 981-0361 <br></br>
              rukassefa@gmail.com
              </Typography>
          </StyledNameContactBox>

          <Grid container justifyContent="center">
          <Grid item xs={12} sm={8} md={8}>
            <ProfessionalSummaryCard>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5" gutterBottom style={{textAlign:"center" , color:"white"}}>
                    Professional Summary
                  </Typography>
                  <Typography variant="body2" color="tan">
                    Results-driven Full Stack Developer with over one year of professional experience in React, Node.js, and MongoDB. Dedicated to crafting high-performance, secure, and elegant applications. Seeking to leverage expertise in full-stack development, CI/CD tools, and cloud platforms to contribute effectively to innovative projects.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </ProfessionalSummaryCard>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={8}>
         < CardActionArea>
          <CardContent>
        <StyledTechnicalSkills>
        <Typography variant="h4" align="center">
          Technical Skills
        </Typography>
        <Typography variant="body1" align="center" color="tan">
          <ul>
            <li>Front/Back/Scripting Langs: HTML5, CSS, JavaScript, Node.js, React</li>
            <li>Web Services: RESTful, Web API, REST API</li>
            <li>Test/Debugger Tools: Jest, Developer Tools, Firebug</li>
            <li>Libraries/Platforms: React, Redux, RTK, Next.js, Git, MUI, JIRA</li>
            <li>Operating Systems: Windows 11, UNIX, Linux</li>
            <li>Data/Databases: SQL, MySQL, MongoDB, Firebase</li>
            <li>Cloud Computing: Amazon Web Services (AWS)</li>
          </ul>
        </Typography>
      </StyledTechnicalSkills>
      </CardContent>
      </CardActionArea>
    </Grid>
  </Grid>

  <StyledHeading variant="h1" align="center">
  Professional Experience
</StyledHeading>
<StyledTimeLine component="div">
  <YearLabel variant="h2">
    2022 - Present
  </YearLabel>
  <StyledTimeLineItem>
    <StyledSubHeading component="div">
      <Typography variant='h5' align='left'>
        Junior Front End Developer
      </Typography>
      <Typography variant='body1' align='left' style={{ color: "tomato" }}>
        Solution Ladder, Silver Spring, MD
      </Typography>
      <Typography variant='subtitle1' align='left' style={{ color: "tan" }}>
        • Collaborated with senior developers, project owners, and designers to implement tasks, emphasizing adherence to quality standards.<br />
        • Ensured 508 compliance, browser compatibility, and responsiveness through CSS and JS usage.<br />
        • Implemented 5 React features using class and functional components, hooks, and libraries.<br />
        • Familiar with Redux making reducers functions and implementing store methods.<br />
        • Developed RESTful APIs with the MERN stack and worked on middleware, Express.js, and Passport.<br />
        • Implemented JWT security using Passport and MongoDB CRUD operations with Mongoose.<br />
        • Employed Docker for basic containerization and GitHub for collaboration and CI/CD.<br />
        • Environment: Visual Studio Code, HTML5, CSS4, Web API, JSON, GitHub, Typescript, OAuth, JWT, Jira, Postman, AWS, Linux, Windows.
      </Typography>
    </StyledSubHeading>
  </StyledTimeLineItem>
  </StyledTimeLine>
<StyledTimeLine>
  <YearLabel variant="h2">
    2020 - 2022
  </YearLabel>
  <StyledTimeLineItem style={{ float: 'right' }}>
    <StyledSubHeading component="div">
      <Typography variant='h5' align='left'>
        Web Developer (Internship)
      </Typography>
      <Typography variant='body1' align='left' style={{ color: "tomato" }}>
        Solution Ladder, Silver Spring, MD
      </Typography>
      <Typography variant='subtitle1' align='left' style={{ color: "tan" }}>
        • Acquired foundational skills in HTML, CSS, and JavaScript for web development.<br />
        • Conducted pre- and post-production manual testing, coordinated team meetings, and addressed HTML/CSS/JS issues.<br />
        • Assisted senior developers, contributed to feature enhancements, and created a sample library application using vanilla JavaScript.
      </Typography>
    </StyledSubHeading>
  </StyledTimeLineItem>
</StyledTimeLine>


        </StyledMainContainer>
      </ThemeProvider>
    </>
  );
}

export default Resume;

