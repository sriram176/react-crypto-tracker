import { createMuiTheme, createTheme, makeStyles, ThemeProvider,Paper } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import React,{useState ,createContext} from "react"

const useStyles = makeStyles((theme) => ({
  App: theme.palette.type=='light' ? {
    minHeight: "100vh",
  }:
  {
    backgroundColor:'black',
    minHeight: "100vh"
  }
}));
export const LoginDetails = React.createContext()



function App() {
  const classes = useStyles();
  const [darkMode, setdarkMode] = useState(false)
  const [user, setUser] = useState({
    login:false,
    userName:""
  })
  const theme = createTheme({
    
    palette: {
      
      type: darkMode ? 'dark'  : 'light'
    },
  });
 
  return (
    <LoginDetails.Provider value={user}>
    <ThemeProvider theme={theme}>
    
      <Paper >
      <Header user={user} setUser={setUser} darkMode={darkMode} setdarkMode={setdarkMode} theme={theme} />
    
    <BrowserRouter>
    
      
         
        <Route path="/" exact render={(props) => <Homepage theme={theme} {...props} />}  />
        <Route path="/coins/:id" component={CoinPage} exact />
      
        </BrowserRouter>
      </Paper>
      </ThemeProvider>
      {JSON.stringify(user)}
      </LoginDetails.Provider>
  
  );
}

export default App;
