import {
  Button,
  Stack,
  FormGroup,
  TextField,
  FormHelperText,
  Typography,
} from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/firebase.config";
import { registerUser } from "./../../../firebase/firebase.api";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[2].value;
    const password = e.target[4].value;
    const confirmPassword = e.target[6].value;

    if (password.length < 8) {
      return setError("Password must be atleast 8 character long.");
    }
    if (password !== confirmPassword)
      return setError("Password and confirm password are not same.");

    setError("");
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      await registerUser(user.user.uid, { email, name });
      navigate("/");
      if (storedUser) return navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Stack alignItems="center" justifyContent="center" minHeight="60vh">
      <form onSubmit={handleSubmit}>
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
            required
            type="email"
            label="Email"
            sx={{
              mb: 2,
            }}
          />
          <TextField
            required
            type="password"
            label="Password"
            sx={{
              mb: 2,
            }}
          />
          <TextField
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
          {error && <FormHelperText error>{error}</FormHelperText>}
        </FormGroup>
      </form>
    </Stack>
  );
};

export default SignUp;
