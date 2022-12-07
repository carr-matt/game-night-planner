import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import { useGetDetailQuery } from '../app/detailApi';
import { useParams } from "react-router-dom";
import { useAddNewPostMutation } from "../app/createSlice"; 




function DetailPage() {

   let { bgaID } = useParams();
   const { data, isLoading } = useGetDetailQuery(bgaID)
  //  console.log(data)
  //  console.log(useParams)
      console.log(bgaID)
      console.log(data)
// const { data: postData } = api.endpoints.getPosts.useQuery()
// const [updatePost, { data:updatePostData }] = api.endpoints.updatePost.useMutation()
const [addNewGame, response] = useAddNewPostMutation()
// const { data: updatePostData } = useAddNewPostMutation();




//     async function addOwned(token, bgaID, name) {
//     const ownedUrl = "http:localhost:8000/owned" 
//     const fetchConfig = {
//         method: 'POST',
//         body: JSON.stringify({ "bgaID": bgaID, "name": name }),
//         headers: {
//             Authorization: `Bearer ${token}`,
//             credentials: "include",
//             accept: "application/json",
//             "Content-Type": "application/json"
//         }

//     };
//     // await fetch(ownedUrl, fetchConfig);
// }

//   async function addFavorite(token, bgaID, name) {
//       const favUrl = `${process.env.REACT_APP_API_HOST}/favorite`
//       const fetchConfig = {
//           method: 'POST',
//           body: JSON.stringify({ "bgaID": bgaID, "name": name }),
//           headers: {
//               Authorization: `Bearer ${token}`,
//               credentials: "include",
//               accept: "application/json",
//               "Content-Type": "application/json"
//           }
//       };
//       // await fetch(favUrl, fetchConfig);
//   }



   if (isLoading) {
    return null
  }
    //  const handleOwnedClick = (e) => {
    //     addNewGame(bgaID.bgaId, bgaID.name)
    //     }
  
      // const handleOwnedClick = e => {
      // data.games( detailGame => {
      //   map[detailGame.id, detailGame.name] = detailGame
      // addNewGame(detailGame)

     const handleOwnedClick = e => {
      {data.games?.map( detailGame => {
        addNewGame(detailGame.id, detailGame.name)}) 
         } } 
      // e.preventDefault();
      // console.log(detailGame)
      console.log('The link was clicked.');
      
            



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
