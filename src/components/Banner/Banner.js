import { Container, makeStyles, Typography,Box,CircularProgress } from "@material-ui/core";
import Carousel from "./Carousel";
import React,{ Suspense } from 'react'
// const Carousel = React.lazy(() => import("./Carousel"));

const useStyles = makeStyles((theme) => ({
  // banner: {
  //   backgroundImage: theme.palette.type == 'light' ? "url(./whiteback.jpg)" : "url(./banner2.jpg)",
  // },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banner(props) {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Hunter
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: props.theme.palette.type == 'light' ? "black" : "white",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        {/* <Suspense fallback={ <Box sx={{ display: 'flex', alignItems: 'center',
          justifyContent: 'center' }}>
      <CircularProgress />
    </Box>}> */}
				<Carousel />
			{/* </Suspense> */}
        
      </Container>
    </div>
  );
}

export default Banner;
