import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import { useGetDetailQuery } from '../app/detailApi';
import { useParams } from "react-router-dom";




function DetailPage() {

   const { data, isLoading } = useGetDetailQuery();
   console.log(data)


   if (isLoading) {
    return null}



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
                <h2>Random Game</h2>
              </div>
              <div className="card-body">
                <table>
                  <tbody>
                    {data.games?.map(randomGame => (
                      <tr key={randomGame.id}>
                        <td>
                          <a href={randomGame.image_url} />
                        </td>
                        <td>
                          {randomGame.name}
                        </td>
                        <td>
                          {randomGame.description}
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
