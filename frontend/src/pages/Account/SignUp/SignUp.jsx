import {
  Button,
  Stack,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const SignUp = () => {
  return (
    <Stack alignItems="center" justifyContent="center" minHeight="60vh">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Submitted");
        }}
      >
        <FormGroup
          sx={{
            width: "30vw",
            minHeight: "400px",
            minWidth: "280px",
            padding: 2,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            border: "1px solid",
            borderColor: "#0c831f",
          }}
        >
          <Typography variant="h4" fontWeight={600} color="#0c831f" mb={2}>
            Sign Up
          </Typography>
          <TextField
            defaultValue="Hello World"
            required
            type="text"
            label="Name"
            sx={{
              mb: 2,
              "&:focus": {
                border: "1px solid #0c831f",
              },
            }}
          />
          <TextField
            defaultValue="Hello World"
            required
            type="email"
            label="Email"
            sx={{
              mb: 2,
            }}
          />
          <TextField
            defaultValue="Hello World"
            required
            type="password"
            label="Password"
            sx={{
              mb: 2,
            }}
          />
          <TextField
            defaultValue="Hello World"
            required
            type="password"
            label="Confirm password"
            sx={{
              mb: 2,
            }}
          />
          <Button
            type="submit"
            variant="outlined"
            sx={{
              color: "#0c831f",
              border: "1px solid #0c831f",
              "&:hover": {
                backgroundColor: "rgba(12,131,31,0.1)",
                border: "1px solid #0c831f",
              },
            }}
          >
            Submit
          </Button>
        </FormGroup>
      </form>

    </Stack>
  );
};

export default SignUp;
