import React from 'react'
import { Box,Stack } from '@mui/material'
import { KeyboardArrowDown, PersonOutlineOutlined } from '@mui/icons-material'
import Dropdown from '../../../common/Dropdown/Dropdown'
import { accoutForLargerScreens, accoutForSmallerScreens } from './AccountSectionStyle'
const AccountSection = ({disableAccount}) => {
  return (
    <Stack style={{display:disableAccount?"none":"flex"}} justifyContent="center">
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
  )
}

export default AccountSection