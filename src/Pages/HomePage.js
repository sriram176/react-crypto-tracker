import { Container, Dialog } from "@material-ui/core";
import React from "react";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";
import Login from '../components/Login/login'

const Homepage = (props) => {

  return (
    <Container>
      <Banner theme={props.theme}/>
      <CoinsTable  theme ={props.theme} />
    </Container>
  );
};

export default Homepage;
