import React, { useState, useEffect } from 'react';
import '../App.css';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './comp.css';
// import Item from '@material-ui/core/Item';

function UserDashboard() {

    // const [playedGames, setPlayedGames] = useState([]) //Destructor = declare multiple variables on one line. State is a function which exporsts multiple variables
    // setPlayedGames('newPlayedGames', playedGames) // setPlayed games is a function and now it replaces playedGames as Risk. 
    // playedGames // ['catan']

    const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


    return ( 
    <div className="app-list">
      <h1 className="Header">User Dashboard </h1>
        <div className="app-container">
        <div className="app-container">
        <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={3}> {/* space between Items in grid */}
          <Grid item={true} xs={6} md={3}> {/* xs = the height and md = the column space it takes up out of 12 */}
            <Item> Your Reviews </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <Item> Played Games </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <Item> Owned Games </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <Item> Liked Games </Item>
          </Grid>
        </Grid>
        </Box>
         </div>
         </div>
        </div>

    )

}

export default UserDashboard














// import React, {useState, useRef, useEffect} from 'react'
// import moment from 'moment';

// function UserDashboard() {
//   const blankForm = {
    
//     reviews: "",
//     playedGames: "",
//     ownedGames: "",
//     likedGames: "",
//   }

// const [playedGames, setPlayedGames] = useState([]);
// const [playedGames, setPlayedGames] = useState([]);
// const [playedGames, setPlayedGames] = useState([]);
// const [playedGames, setPlayedGames] = useState([]);

// async function getPlayedGames() {
//     let listUrl = ""
//     try {
//       const response = await fetch(listUrl);
//       const listOfPlayedGames = await response.json();
//       setPlayedGames(listOfPlayedGames)
//     } catch (e) {
//       console.error(e);
//     }
//   }
