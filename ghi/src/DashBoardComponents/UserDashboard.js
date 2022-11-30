import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './comp.css';
import { gameSlice } from "../app/gameApi"; 

  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  }));
// import Item from '@material-ui/core/Item';

function UserDashboard(props) {
     // {data: gameData }
    // const [gameData, setGameData] = useState([])
    const {useGetOwnedQuery} = gameSlice //use_query sandwhich lets redux know that this is a hook
    const {data, isLoading} = useGetOwnedQuery(); 
    console.log(data)
    // setGameData(data)
    const [ ownedGame, setOwnedGame ] = useState("");

    if(isLoading) {
      return null
    }

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
            <Item> <select id="owned-form1" className="form-control" onChange={e => setOwnedGame({ownedGame: e.target.value})}>  {/* {ownedGames.map(ownedGame => { */}
                    <option id="owned-form1" value="">Your Owned Games</option>
                    {data.ownedGames.map( ownedGame => {
                    return (
                      <option key={`${ownedGame.name} ${ownedGame.id}`} value={ownedGame.id}>{ownedGame.name}</option>
                    )
                  })}  </select> </Item> 
          </Grid>
          <Grid item xs={6} md={3}>
            {/* <Item> Liked Games <select id="owned-form1" className="form-control" onChange={e => setLikedGames({likedGame: e.target.value})}> {likedGames.map(likedGame => {
                    return(
                    <option id="owned-form1" key={likedGame.id}>{likedGame.name} </option>
                    )
                  })} </select> </Item> */}
          </Grid>
        </Grid>
        </Box>
         </div>

    )

}

export default UserDashboard
