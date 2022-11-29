import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './comp.css';
import { useGetMyGameQuery } from "../app/gameApi"; 
// import Item from '@material-ui/core/Item';

function UserDashboard() {
  const blankForm = {
    ownedGame: "",
    likedGame: "",
  }

  const [ownedGames, setOwnedGames] = useState([]);
  const [likedGames, setLikedGames] = useState([]);
    // const [playedGames, setPlayedGames] = useState([]) //Destructor = declare multiple variables on one line. State is a function which exporsts multiple variables
    // setPlayedGames('newPlayedGames', playedGames) // setPlayed games is a function and now it replaces playedGames as Risk. 
    // playedGames // ['catan']

  async function getOwnedGames() {
    let ownedUrl = "http://localhost:8080/games/ownedGames/"
    try {
      const response = await fetch(ownedUrl);
      const listOfOwnedGames = await response.json();
      setOwnedGames(listOfOwnedGames)
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(
    () => {
      getOwnedGames();
    }, []
  )

  async function getLikedGames() {
    let likedUrl = "http://localhost:8080/games/likedGames/"
    try {
      const response = await fetch(likedUrl);
      const listOfLikedGames = await response.json();
      setLikedGames(listOfLikedGames)
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(
    () => {
      getLikedGames();
    }, []
  )
  

    
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
        <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={5}> {/* space between Items in grid */}
          <Grid item={true} xs={6} md={3}> {/* xs = the height and md = the column space it takes up out of 12 */}
            <Item> Your Reviews </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <Item> Played Games </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <Item> Owned Games </Item>
            <Item> <select id="owned-form1" className="form-control" onChange={e => setOwnedGames({ownedGame: e.target.value})}> {ownedGames.map(ownedGame => {
                    return(
                    <option id="owned-form1" key={ownedGame.id}>{ownedGame.name} </option>
                    )
                  })} </select> </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <Item> Liked Games <select id="owned-form1" className="form-control" onChange={e => setLikedGames({likedGame: e.target.value})}> {likedGames.map(likedGame => {
                    return(
                    <option id="owned-form1" key={likedGame.id}>{likedGame.name} </option>
                    )
                  })} </select> </Item>
          </Grid>
        </Grid>
        </Box>
         </div>

    )

}

export default UserDashboard
