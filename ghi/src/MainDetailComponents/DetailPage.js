import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import { useGetDetailQuery } from '../app/detailApi';
import { useParams } from "react-router-dom";
// import { useAddNewPostMutation } from "../app/createSlice";
import { useGetTokenQuery } from '../app/authApi';






function DetailPage() {

   let { bgaID } = useParams();
   const { data, isLoading } = useGetDetailQuery(bgaID)
   const { data: tokenData, isLoading: tokenLoading } = useGetTokenQuery();
   console.log("OG token Data", {tokenData} )



  let detailGameData = e => {
      {data.games?.map( detailGames => {
        const nameData = [detailGames.name]
        return nameData
        } );  }

          }

    async function addFavorite(bgaID, detailGameData, username) {
    console.log("tokenData username", {username})
    console.log("Game Name", {detailGameData})
    const fetchConfig = {
        method: 'POST',
        body: JSON.stringify({ "bgaID": bgaID, "name": detailGameData, "username": username }),
        headers: {
            Authorization: `Bearer ${username}`,
            credentials: "include",
            accept: "application/json",
            "Content-Type": "application/json"
        }

    };
     const test = await fetch(`${process.env.REACT_APP_GAME_NIGHT_API_HOST}/favorite`, fetchConfig);
     console.log(test)
     let fetchConfigData = fetchConfig
     console.log("***", {fetchConfigData} )
}

    async function addOwned(bgaID, detailGameData, username) {
    console.log("tokenData username", {username})
    console.log("Game Name", {detailGameData})
    const fetchConfig = {
        method: 'POST',
        body: JSON.stringify({ "bgaID": bgaID, "name": detailGameData, "username": username }),
        headers: {
            Authorization: `Bearer ${username}`,
            credentials: "include",
            accept: "application/json",
            "Content-Type": "application/json"
        }

    };
     const test = await fetch(`${process.env.REACT_APP_GAME_NIGHT_API_HOST}/owned`, fetchConfig);
     console.log(test)
     let fetchConfigData = fetchConfig
     console.log("***", {fetchConfigData} )
}


   if (isLoading) {
    return null
  }


     const handleOwnedClick = e => {
      {data.games?.map( detailGame => {
        const idData = detailGame.id
        const nameData = detailGame.name
        return addOwned(idData, nameData, tokenData.account.username)
        // console.log(idName)
        }) }

          }

      const handleFavoriteClick = e => {
       {data.games?.map( detailGame => {
        const idData = detailGame.id
        const nameData = detailGame.name
        return addFavorite(idData, nameData, tokenData.account.username)
        // console.log(idName)
        }) }

          }
        //  detailGame.id,
      // e.preventDefault();

      // console.log('The link was clicked.');


  return (
    <div>
        <h1>Game Night Planner</h1>
        <h2>Never wonder what game you'll play next again!</h2>
        <br/>
        <div className="container">
        <div className="row mt-5">
          <div className="col">
            <div className="card">
              <div className="card-header">
                {data.games?.map(detailGame => (
                <h3 key={detailGame.games}>
                   {detailGame.name}</h3>)
                ) }
                <button onClick={handleOwnedClick}> Add to Owned List</button>
                <button onClick={handleFavoriteClick}> Add to Favorite List</button>
              </div>
                  <div className="button">
                {/* {token ? <><button
                    onClick={() => {
                        addFavorite(token);
                    }} type='submit' className='button23 mx-3 my-2'>Add to Favorites</button>
                    </> :
                    <></>} */}

            </div>

              <div className="card-body">
                <table>
                  <tbody>
                    {data.games?.map(detailGame => (
                      <tr key={detailGame.games}>
                        <td>
                          <tr> <img src={detailGame.image_url} /> </tr>
                        </td>
                        <td>
                          <tr> {detailGame.name} </tr>
                        </td>
                        <td>
                          {detailGame.description}
                        </td>
                        <td>
                          Minimum players: {detailGame.min_players}
                        </td>
                        <td>
                          Maximum players: {detailGame.max_players}
                        </td>
                        <td>
                          Minimum age: {detailGame.min_age}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
)}

export default DetailPage


 //  const handleOwnedClick = (e) => {
    //     addNewGame(bgaID.bgaId, bgaID.name)
    //     }

      // const handleOwnedClick = e => {
      // data.games( detailGame => {
      //   map[detailGame.id, detailGame.name] = detailGame
      // addNewGame(detailGame) }




// addNewPost()
//         .unwrap()
//         .then((res) => console.log(res))
//         .then((error) => {
//           console.log(error)




// import React, { useState, useEffect } from 'react';
// import { Grid } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import 'bootstrap/dist/css/bootstrap.css'
// import './compy.css';
// import { detailSlice } from "../app/detailApi";
// import 'bootstrap/dist/css/bootstrap.css'


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   }));


// function DetailPage (props) {s
//   const {useGetDetailQuery} = detailSlice
//   const {data, isLoading} = useGetDetailQuery();
//   const [collectionOfDetails, setCollectionOfDetails] = useState({})

//     useEffect(() =>{
//        if(favData){
//         const map = {}
//         data.games.forEach(game =>{
//           map[game.image_url] = game
//         })
//         setCollectionOfDetails(map)

//     }

//     const handleChange = e =>{
//       console.log('event',e,  e.target.value, 'collectionOfDetails', collectionOfDetails)
//       const selectedGame = collectionOfDetails[e.target.value]
//       setDetailGame(selectedGame)

//     if(isLoading) {
//       return null
//     }

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//          <Grid container spacing={5}> {/* space between Items in grid */}
//           <Grid item xs={6} md={5}>
//             <Item> Game Details </Item>




//         </Grid>
//         </Grid>
//         </Box>
//   )

// }


// export default DetailPage
