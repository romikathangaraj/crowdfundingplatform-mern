import React from "react";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton, InputBase } from "@mui/material";
import { AccountCircle, Search, Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from "./assests/logo.jpg"
const FundNestAppBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        {/* Website Name with Icon */}
       
   
        <img src={logo} alt="logo" style={{ height: 50, marginRight: 10 }} />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          FundNest
        </Typography>
        
        {/* Navigation Buttons */}
        <Button color="inherit" onClick={() => window.location.href = "/browse"}>Browse Fundraisers</Button>
        
        {/* Fundraise For Dropdown */}
        <Button color="inherit" onClick={handleMenuOpen}>Fundraise For</Button>
        <ArrowDropDownIcon onClick={handleMenuOpen}/>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Medical</MenuItem>
          <MenuItem onClick={handleMenuClose}>Education</MenuItem>
          <MenuItem onClick={handleMenuClose}>Non-Profit</MenuItem>
        </Menu>
        
        <Button color="inherit">How It Works</Button>
        
        {/* Search Bar */}
        <div style={{ position: "relative", marginLeft: "20px", marginRight: "20px" }}>
          <IconButton>
            <Search style={{ color: "white" }} />
          </IconButton>
          <InputBase placeholder="Search..." style={{ color: "white" }} />
        </div>
        
        {isLoggedIn ? (
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        ) : (
          <Button color="inherit" onClick={handleLogin}>Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default FundNestAppBar;
