import React, { useEffect, useState } from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { KeyboardArrowDown, PersonOutlineOutlined } from "@mui/icons-material";
import Dropdown from "../../../common/Dropdown/Dropdown";
import LogoutIcon from '@mui/icons-material/Logout';
import {
  accoutForLargerScreens,
  accoutForSmallerScreens,
} from "./AccountSectionStyle";
import { auth } from "../../../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

const AccountSection = ({ disableAccount }) => {
  const [user,setUser ] = useState(null)
  const navigate = useNavigate()

  const handleSignOut = () => {
    auth.signOut();
    navigate("/account")
  };

  useEffect(()=>{
    onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
    })
  },[user])

  if (user)
    return (
      <Stack alignItems="center" justifyContent="center">
        <IconButton variant="outlined" onClick={handleSignOut}>
          <LogoutIcon/>
        </IconButton>
      </Stack>
    );

  return (
    <Stack
      style={{ display: disableAccount ? "none" : "flex" }}
      justifyContent="center"
    >
      {/* Account Section for large screen */}
      <Box
        sx={{
          ...accoutForLargerScreens(),
        }}
      >
        <Dropdown
          info={{
            option_name: "Account",
            option_icon: <KeyboardArrowDown />,
            options: ["Login", "Signup"],
            height: 1, // 1 for full height and 0 for default mui height
          }}
        />
      </Box>
      {/* Account Section for small screen */}
      <Box
        sx={{
          ...accoutForSmallerScreens(),
        }}
      >
        <Dropdown
          info={{
            option_name: "",
            option_icon: <PersonOutlineOutlined />,
            options: ["Login", "Signup"],
            height: 1, // 1 for full height and 0 for default mui height
          }}
        />
      </Box>
    </Stack>
  );
};

export default AccountSection;
