import React, { FC } from "react";
import { DecodedToken } from "../../helper/auth_token";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "../Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

interface Props {
  user: DecodedToken;
}
const Header: FC<Props> = ({ user }) => {
  const initials = user.name.first[0] + user.name.last[0];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Job application management</Typography>
        <div style={{ flexGrow: 1 }}>
          {/* <Button isLink href="/" color="inherit">
            Home
          </Button>
          <Button isLink href="/myjobs" color="inherit">
            My jobs
          </Button> */}
        </div>
        <div style={{ display: "flex" }}>
          <Avatar
          //  onClick={handleClick}
          >
            {initials}
          </Avatar>
          <Button
            // disabled
            color="inherit"
            onClick={(e) => {
              // handleClick(e)
            }}
            // endIcon={
            //   Boolean(anchorEl) ? <ExpandLessIcon /> : <ExpandMoreIcon />
            // }
          >
            {`${user.name.first} ${user.name.last}`}
          </Button>
          {/* <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu> */}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
