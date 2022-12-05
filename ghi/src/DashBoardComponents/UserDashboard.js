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
    const {useGetOwnedQuery, useGetFavoriteQuery} = gameSlice //use_query sandwhich lets redux know that this is a hook
    const [collectionOfGames, setCollectionOfGames] = useState({}) //setcollection is a function which recieves the selected data from our handle change on collection of games
    const [collectionOfFavGames, setCollectionOfFavGames] = useState({})
    const {data, isLoading} = useGetOwnedQuery(); 
    const {favData, isFavLoading} = useGetFavoriteQuery();
    const [ownedGame, setOwnedGame ] = useState(null); 
    const [favoriteGame, setFavoriteGame ] = useState(null); 

    //react router on change to link
    useEffect(() => console.log(ownedGame), [ownedGame])
    useEffect(() => console.log(favoriteGame), [favoriteGame])

    useEffect(() =>{
      
      if(data){
        const map = {}
        data.owned_list.forEach(game =>{ 
          map[game.bgaID] = game
        }) //go through the game data and (forEach) means to create a bucket
        // for(let i = 0; i < data.games.length; i++){//same thing as above
        //   const game = data.games[i]
        //   collectionOfGames[game.id] = game
        // } == what forEach does. 
        setCollectionOfGames(map)// we are taking this temporay bucket of games (map) and setting it equal to our variable collection of games to persitst the data over reRenders
      }
      if(favData){
        const mapp = {}
        favData.favorites.forEach(favGame =>{ 
          mapp[favGame.bgaID] = favGame
           })
          setCollectionOfFavGames(mapp)
      } 
    },[data, favData])

    const handleChange = e =>{
      console.log('event',e,  e.target.value, 'collectionOfGames', collectionOfGames)
      const selectedGame = collectionOfGames[e.target.value]
      setOwnedGame(selectedGame)

      console.log('event',e,  e.target.value, 'collectionOfFavGames', collectionOfFavGames)
      const selectedfavGame = collectionOfFavGames[e.target.value]
      setFavoriteGame(selectedfavGame)
    }

    if(isLoading) {
      return null
    }

     if(isFavLoading) {
      return null
    }
    
    return (  
    <div className="app-list">
      <h1 className="Header">User Dashboard </h1>
        <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={5}> {/* space between Items in grid */}
          <Grid item xs={6} md={5}>
            <Item> Owned Games </Item> {/* xs = the height and md = the column space it takes up out of 12 */}
            <Item> <select id="owned-form1" className="form-control" onChange={handleChange}>  {/* {ownedGames.map(ownedGame => { */}
                    <option id="owned-form1" value="">Your Owned Games</option>
                    {data.owned_list.map( game => {
                    return (
                      <option key={`${game.name} ${game.bgaID}`} value={game.bgaID}>{game.name} </option>
                    )
                  })}  </select> </Item> 
          </Grid>
          <Grid item xs={6} md={5}>
            <Item> Favorite Games </Item> 
            <Item> <select id="owned-form1" className="form-control" onChange={handleChange}>  
                    <option id="owned-form1" value="">Your Favorite Games</option>
                    {favData?.favorites.map( favGame => {
                    return (
                      <option key={`${favGame.name} ${favGame.bgaID}`} value={favGame.bgaID}>{favGame.name}</option>
                    )
                  })}  </select> </Item> 
          </Grid>
        </Grid>
        </Box>
         </div>

    )

}

export default UserDashboard
