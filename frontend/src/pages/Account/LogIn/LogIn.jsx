import { async } from "@firebase/util";
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
  FormHelperText,
} from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/firebase.config";


const LogIn = () => {
  const navigate = useNavigate()
  const [error, setError] = useState("")

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const email = e.target[0].value
    const password = e.target[2].value

    if(password.length<8){
      return setError("Password must be atleast 8 character long.")
    }
    setError("")
    try{
      const user = await signInWithEmailAndPassword(auth,email,password)
      if(user) navigate("/")
    }catch(error){
      setError(error.message)
    }
  }


  return (
    <Stack alignItems="center" justifyContent="center" minHeight="60vh">
      <form
        onSubmit={handleSubmit}
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
            Log In
          </Typography>
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
          <Stack direction="row" justifyContent="end">
            <Typography variant="subtitle1" fontWeight={300} color="#0c831f">
              Forgot Password?
            </Typography>
            <Typography
              sx={{
                color: "primary.main",
                pl: 1,
                cursor: "pointer",
              }}
            >
              Chick Here!
            </Typography>
          </Stack>
        </FormGroup>
      </form>
    </Stack>
  );
};

export default LogIn;
