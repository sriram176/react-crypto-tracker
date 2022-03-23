import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  Paper,
  Switch,
  Button,
  Dialog,
  Avatar,
  Menu,
  Tooltip,
  IconButton,
  Divider,
  
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import Login from "../components/Login/login"
import React, { useContext, useState } from "react";
import {LoginDetails} from "../App";
const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "black",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

// const darkTheme = createTheme({
//   palette: {
//     primary: {
//       main: "#fff",
//     },
//     type: "dark",
//   },
// });

function Header(props) {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();
  const [openLogin,setOpenLogin] = useState(false)
  const history = useHistory();
  const details = useContext(LoginDetails)
  const [openMenu, setopenMenu] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ThemeProvider theme={props.theme}>
      
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push(`/`)}
              variant="h6"
              className={classes.title}
            >
              Crypto Hunter
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
            <Switch checked={props.darkMode} onChange={() => props.setdarkMode(!props.darkMode)}>DarkMode</Switch>
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
           {details.login ? 
          <React.Fragment>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            style={{ height: 40, marginLeft: 15 }}

            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{  height: 40 }}>{details.userName.slice(0,2)}</Avatar>
          </IconButton>
        </Tooltip>
      
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        style={{borderWidth: 10}}
        
      
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          Profile
        </MenuItem>
        <MenuItem>
         My account
        </MenuItem>
        <Divider />
        <MenuItem>
          
          Add another account
        </MenuItem>
        <MenuItem>
         
          Settings
        </MenuItem>
        <MenuItem>
          
          Logout
        </MenuItem>
      </Menu>
      </React.Fragment>
      
      :<Button variant="outlined" style={{ width: 100, height: 40, marginLeft: 15,backgroundColor:"black",color:'white' }} onClick={()=>setOpenLogin(true)} > Login</Button>  }
          </Toolbar>
        </Container>
      </AppBar>
      <Dialog open={openLogin}  onClose={()=>setOpenLogin(false)} ><Login user={props.user} setUser={props.setUser} setOpenLogin={setOpenLogin}/></Dialog>
      
    </ThemeProvider>

  );
}

export default Header;
