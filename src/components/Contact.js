import React from "react";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Send from "@mui/icons-material/Send";
import NavBar from "./NavBar";

const ContactContainer = styled(Box)`
  background: #233;
  height: 100vh;
`;

const Heading = styled(Typography)`
  color: tomato;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const Form = styled(Box)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

const InputField = styled(TextField)`
  & label.Mui-focused {
    color: tomato;
  }
  & label {
    color: tan;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: tan;
    }
    &:hover fieldset {
      border-color: tan;
    }
    &.Mui-focused fieldset {
      color: #fff;
      border-color: tan;
    }
  }
  & .MuiInputBase-input {
    color: #fff;
  }
`;

const SubmitButton = styled(Button)`
  margin-top: 1rem;
  color: tomato;
  border-color: tan;
`;

const Contact = () => {
  return (
    <>
    <NavBar/>
    <ContactContainer component="div">
      <Grid container justifyContent="center">
        <Form component="form">
          <Heading variant="h5"> Contact me...</Heading>
          <InputField
            fullWidth
            label="Name"
            variant="outlined"
            inputProps={{ className: "input" }}
          />
          <InputField
            fullWidth
            label="Email"
            variant="outlined"
            inputProps={{ className: "input" }}
            sx={{ margin: "1rem 0" }}
          />
          <InputField
            fullWidth
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            inputProps={{ className: "input" }}
          />
          <SubmitButton
            variant="outlined"
            fullWidth
            endIcon={<Send />}
          >
            Contact Me
          </SubmitButton>
        </Form>
      </Grid>
    </ContactContainer>
    </>
  );
};

export default Contact;
