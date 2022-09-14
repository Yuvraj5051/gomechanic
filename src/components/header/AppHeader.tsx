import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import appLogo from "../../assets/images/app-logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./AppHeader.module.css";

export const AppHeader = () => {
  return (
    <AppBar
      position="static"
      style={{
        background: "transparent",
        boxShadow: "none",
        marginTop: ".8em",
      }}
    >
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <img src={appLogo} alt="logo" className={styles["app-logo"]} />
        </IconButton>
        <Stack
          sx={{ flexGrow: 1 }}
          className={styles["header-menu"]}
          direction="row"
        >
          <Typography className={styles["btn-typography"]}>Pune</Typography>
          <KeyboardArrowDownIcon />
        </Stack>
        <Stack direction="row" spacing={1} className={styles["header-menu"]}>
          <Button color="inherit">
            <Typography className={styles["btn-typography"]}>Spare</Typography>
          </Button>
          <Button color="inherit">
            <Typography className={styles["btn-typography"]}>Blog</Typography>
          </Button>
          <Button color="inherit">
            <Typography className={styles["btn-typography"]}>More</Typography>
          </Button>
          <Button variant="contained" color="error">
            <Typography className={styles["btn-typography"]}>Login</Typography>
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
