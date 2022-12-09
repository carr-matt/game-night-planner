// // You can only use hooks inside of functions
// // Everytime your function runs your hooks must run in the same order.
// // State, Effect, Memo, Ref,Context, Reducer, Callback

// // import React { useState } from 'react';


// // function App() {
// //     const [count, setCount] = useState(4)
// // }
// // function decrementCount() {
// //     const[count, setCount] = useState(4)
// // }
// // import Paper from '@material-ui/core/Grid';
// // import { makeStyles } from '@material-ui/core/styles';

// //Need to import a component library FUCK ZOOM loool
// //it doesnt look like you have a compentent libraby tho. It would be a dependency in your package.json
// //if you want to do grid, you need to use it ass (lol) css
// //like this
// /*
//   <div className="some css box with grid">
//     <div className="one of the pieces of the grid">
//       //content
//     </div>
//   </div>
//   Bet llloooool
//   Hahah thank you man. Truly appreciate the help with this

//   <3 AHahhahsahahahshahahhahahahahaha Peace bro
// */
// // np my dood. React is my bread and butter so if you need any tips lmk

// //c ya m8!


// // Table for dashboard
// //  <table>
// //               <thead>
// //                   <tr>
// //                       <th>Your Reviews</th>
// //                   </tr>
// //               </thead>
// //               <tbody>
// //                <td> <input type="text" className="search-bar" placeholder="Search" onChange={(event) => {setSearchTerm(event.target.value)}}></input> </td>
// //               {searchResults.map(app => {
// //                 if(!app.completed){
// //                     return(
// //                     <tr key={app.id}>
// //                         <td>{app.reviews}</td>
// //                     </tr>
// //                     )}
// //                     })}
// //               </tbody>
// //               </table>
// //               <table>
// //               <thead>
// //                     <tr>
// //                       <th>Played Games</th>
// //                     </tr>
// //               </thead>
// //               </table>
// //               <table>
// //               <thead>
// //                     <tr>
// //                       <th>Owned Games</th>
// //                     </tr>
// //               </thead>
// //               </table>
// //               <table>
// //               <thead>
// //                     <tr>
// //                       <th>Liked Games</th>
// //                     </tr>
// //               </thead>
// //               </table>

// //               <tbody>
// //                 {searchResults.map(app => {
// //                   if(!app.completed){
// //               </tbody>



// // Construct.js

// // import {useState} from 'react'

// // function Construct(props) {

// //     const [userInput, setUserInput] = useState('catan')

// //     const pad2 = num => String(num).padStart(2, '0');

// //     const handleChange = (e) =>{
// //         setUserInput(e.target.value)
// //     }

// //     return (
// //         <div className="App">
// //             <header className="App-header">
// //                 <h1>{userInput}</h1>
// //                 <h2>Coming on (or before)</h2>
// //                 <h2>{props.info.year}-{pad2(props.info.month)}-{pad2(props.info.day)}</h2>
// //                 <h2>by or <strong>WELL BEFORE</strong> {pad2(props.info.hour)}:{pad2(props.info.min)}</h2>
// //                 <input onChange={(e) => handleChange(e)}></input>
// //             </header>
// //         </div>
// //     )
// // }

// // export default Construct;


// // import React, {useState, useRef, useEffect} from 'react'
// // import moment from 'moment';

// // function UserDashboard() {
// //   const blankForm = {

// //     reviews: "",
// //     playedGames: "",
// //     ownedGames: "",
// //     likedGames: "",
// //   }

// // const [playedGames, setPlayedGames] = useState([]);
// // const [playedGames, setPlayedGames] = useState([]);
// // const [playedGames, setPlayedGames] = useState([]);
// // const [playedGames, setPlayedGames] = useState([]);

// // async function getPlayedGames() {
// //     let listUrl = ""
// //     try {
// //       const response = await fetch(listUrl);
// //       const listOfPlayedGames = await response.json();
// //       setPlayedGames(listOfPlayedGames)
// //     } catch (e) {
// //       console.error(e);
// //     }
// //   }






// // All my previous Dashboard Code

// // function UserDashboard() {
// //   const blankForm = {
// //     ownedGame: "",
// //     likedGame: "",
// //   }

// // const [ownedGames, setOwnedGames] = useState([]);
// //   const [likedGames, setLikedGames] = useState([]);
// //     // const [playedGames, setPlayedGames] = useState([]) //Destructor = declare multiple variables on one line. State is a function which exporsts multiple variables
// //     // setPlayedGames('newPlayedGames', playedGames) // setPlayed games is a function and now it replaces playedGames as Risk.
// //     // playedGames // ['catan']

// //   async function getOwnedGames() {
// //     let ownedUrl = "http://localhost:8080/games/ownedGames/"
// //     try {
// //       const response = await fetch(ownedUrl);
// //       const listOfOwnedGames = await response.json();
// //       setOwnedGames(listOfOwnedGames)
// //     } catch (e) {
// //       console.error(e);
// //     }
// //   }

// //   useEffect(
// //     () => {
// //       getOwnedGames();
// //     }, []
// //   )

// //   async function getLikedGames() {
// //     let likedUrl = "http://localhost:8080/games/likedGames/"
// //     try {
// //       const response = await fetch(likedUrl);
// //       const listOfLikedGames = await response.json();
// //       setLikedGames(listOfLikedGames)
// //     } catch (e) {
// //       console.error(e);
// //     }
// //   }

// //   useEffect(
// //     () => {
// //       getLikedGames();
// //     }, []
// //   )




// // 4 grids
// //  <div className="app-list">
// //       <h1 className="Header">User Dashboard </h1>
// //         <Box sx={{ flexGrow: 1 }}>
// //          <Grid container spacing={5}> {/* space between Items in grid */}
// //           <Grid item={true} xs={6} md={3}> {/* xs = the height and md = the column space it takes up out of 12 */}
// //             <Item> Your Reviews </Item>
// //           </Grid>
// //           <Grid item xs={6} md={3}>
// //             <Item> Played Games </Item>
// //           </Grid>
// //           <Grid item xs={6} md={3}>
// //             <Item> Owned Games </Item> {/* xs = the height and md = the column space it takes up out of 12 */}
// //             <Item> <select id="owned-form1" className="form-control" onChange={handleChange}>  {/* {ownedGames.map(ownedGame => { */}
// //                     <option id="owned-form1" value="">Your Owned Games</option>
// //                     {data.games.map( game => {
// //                     return (
// //                       <option key={`${game.name} ${game.id}`} value={game.id}>{game.name}</option>
// //                     )
// //                   })}  </select> </Item>
// //           </Grid>
// //           <Grid item xs={6} md={3}>
// //             {/* <Item> Liked Games <select id="owned-form1" className="form-control" onChange={e => setLikedGames({likedGame: e.target.value})}> {likedGames.map(likedGame => {
// //                     return(
// //                     <option id="owned-form1" key={likedGame.id}>{likedGame.name} </option>
// //                     )
// //                   })} </select> </Item> */}
// //           </Grid>
// //         </Grid>
// //         </Box>
// //          </div>




// // if(data){
// //         const map = {}
// //         data.owned.forEach(game =>{
// //           map[game.email] = game
// //         }) //go through the game data and (forEach) means to create a bucket
// //         // for(let i = 0; i < data.games.length; i++){//same thing as above
// //         //   const game = data.games[i]
// //         //   collectionOfGames[game.id] = game
// //         // } == what forEach does.
// //         setCollectionOfGames(map)// we are taking this temporay bucket of games (map) and setting it equal to our variable collection of games to persitst the data over reRenders
// //       } //
// //     },[data])

// //     const handleChange = e =>{
// //       console.log('event',e,  e.target.value, 'collectionOfGames', collectionOfGames)
// //       const selectedGame = collectionOfGames[e.target.value]
// //       setOwnedGame(selectedGame)
// //     }

// //     if(isLoading) {
// //       return null
// //     }

// //     return (
// //     <div className="app-list">
// //       <h1 className="Header">User Dashboard </h1>
// //         <Box sx={{ flexGrow: 1 }}>
// //          <Grid container spacing={5}> {/* space between Items in grid */}
// //           <Grid item xs={6} md={5}>
// //             <Item> Owned Games </Item> {/* xs = the height and md = the column space it takes up out of 12 */}
// //             <Item> <select id="owned-form1" className="form-control" onChange={handleChange}>  {/* {ownedGames.map(ownedGame => { */}
// //                     <option id="owned-form1" value="">Your Owned Games</option>
// //                     {data.owned.map( game => {
// //                     return (
// //                       <option key={`${game.owned} ${game.email}`} value={game.email}>{game.owned}</option>
// //                     )
// //                   })}  </select> </Item>
// //           </Grid>
// //           <Grid item xs={6} md={5}>
// //             <Item> Favorite Games </Item>
// //              {/* <Item> Favorite Games <select id="owned-form1" className="form-control" onChange={e => setFavoriteGames({likedGame: e.target.value})}> {favoriteGames.map(favoriteGame => {
// //                     return(
// //                     <option key={`${game.name} ${game.id}`} value={game.id}>{game.name}</option>
// //                     )
// //                   })} </select> </Item>  */}
// //           </Grid>
// //         </Grid>
// //         </Box>
// //          </div>

// //     )

// // }

// // export default UserDashboard







// import { useEffect, useState } from "react";
// import { useNavigate, Link } from 'react-router-dom'
// import { useGetDetailQuery } from '../app/detailApi';
// import { useParams } from "react-router-dom";
// // import { useAddNewPostMutation } from "../app/createSlice";
// import { useGetTokenQuery } from '../app/authApi';




// // Alternative addFavorite function
// // async function addFavorite(tokenData, DetailGame) {
// //     const favUrl = `http://localhost:8000/favorite`
// //     const fetchConfig = {
// //         method: 'POST',
// //         body: JSON.stringify({"bgaID": "x998EzEoFt", "name": "Munchkin Zombies", "username": "username" }),
// //         headers: {
// //             Authorization: `Bearer ${tokenData}`,
// //             credentials: "include",
// //             accept: "application/json",
// //             "Content-Type": "application/json"
// //         }

// //     };
// //     await fetch(favUrl, fetchConfig);
// // }




// function DetailPage() {

//    let { bgaID } = useParams();
//    const { data, isLoading } = useGetDetailQuery(bgaID)
//    const { data: tokenData, isLoading: tokenLoading } = useGetTokenQuery();
//    console.log("OG token Data", {tokenData} )
//   //  console.log(data)
//   //  console.log(useParams)
//       // console.log(bgaID)
//       // console.log(data)
// // const { data: postData } = api.endpoints.getPosts.useQuery()
// // const [updatePost, { data:updatePostData }] = api.endpoints.updatePost.useMutation()
//   // const [addNewPost, response] = useAddNewPostMutation()
// // const { data: updatePostData } = useAddNewPostMutation();
//   // console.log(addNewPost)


//   let detailGameData = e => {
//       {data.games?.map( detailGames => {
//         const nameData = [detailGames.name]
//         return nameData
//         } );  }

//           }

//     async function addFavorite(bgaID, detailGameData, username) {
//     console.log("tokenData username", {username})
//     console.log("Game Name", {detailGameData})
//     const fetchConfig = {
//         method: 'POST',
//         body: JSON.stringify({ "bgaID": bgaID, "name": detailGameData, "username": username }),
//         headers: {
//             Authorization: `Bearer ${username}`,
//             credentials: "include",
//             accept: "application/json",
//             "Content-Type": "application/json"
//         }

//     };
//      const test = await fetch("http://localhost:8000/favorite", fetchConfig);
//      console.log(test)
//      let fetchConfigData = fetchConfig
//      console.log("***", {fetchConfigData} )
// }

//     async function addOwned(bgaID, detailGameData, username) {
//     console.log("tokenData username", {username})
//     console.log("Game Name", {detailGameData})
//     const fetchConfig = {
//         method: 'POST',
//         body: JSON.stringify({ "bgaID": bgaID, "name": detailGameData, "username": username }),
//         headers: {
//             Authorization: `Bearer ${username}`,
//             credentials: "include",
//             accept: "application/json",
//             "Content-Type": "application/json"
//         }

//     };
//      const test = await fetch("http://localhost:8000/owned", fetchConfig);
//      console.log(test)
//      let fetchConfigData = fetchConfig
//      console.log("***", {fetchConfigData} )
// }
// // csrftoken=PhrbCfLEBIpsqbH11dCo4MPfM2trZwBGQU5Y848njnRtyHjYXmPtKb6T5A0D0VUd; fastapi_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkMThlODA1NC1kZmRlLTQwYTUtOGM0Yy0zMjljYjExYzJhZmQiLCJleHAiOjE2NzA1NTU1ODksInN1YiI6InVzZXJuYW1lIiwiYWNjb3VudCI6eyJpZCI6IjYzOTI1ODkyYjc2Mzg0YzNmMDlkZjM0ZSIsInVzZXJuYW1lIjoidXNlcm5hbWUifX0.N-eHUQJ62cv4BlP6n0508QvH88m21-1nE69NmLrG_A4`

//    if (isLoading) {
//     return null
//   }


//      const handleOwnedClick = e => {
//       {data.games?.map( detailGame => {
//         const idData = detailGame.id
//         const nameData = detailGame.name
//         return addOwned(idData, nameData, tokenData.account.username)
//         // console.log(idName)
//         }) }

//           }

//       const handleFavoriteClick = e => {
//        {data.games?.map( detailGame => {
//         const idData = detailGame.id
//         const nameData = detailGame.name
//         return addFavorite(idData, nameData, tokenData.account.username)
//         // console.log(idName)
//         }) }

//           }
//         //  detailGame.id,
//       // e.preventDefault();

//       // console.log('The link was clicked.');


//   return (
//     <div>
//         <h1>Game Night Planner</h1>
//         <h2>Never wonder what game you'll play next again!</h2>
//         <br/>
//         <div className="container">
//         <div className="row mt-5">
//           <div className="col">
//             <div className="card">
//               <div className="card-header">
//                 {data.games?.map(detailGame => (
//                 <h3 key={detailGame.games}>
//                    {detailGame.name}</h3>)
//                 ) }
//                 <button onClick={handleOwnedClick}> Add to Owned List</button>
//                 <button onClick={handleFavoriteClick}> Add to Favorite List</button>
//               </div>
//                   <div className="button">
//                 {/* {token ? <><button
//                     onClick={() => {
//                         addFavorite(token);
//                     }} type='submit' className='button23 mx-3 my-2'>Add to Favorites</button>
//                     </> :
//                     <></>} */}

//             </div>

//               <div className="card-body">
//                 <table>
//                   <tbody>
//                     {data.games?.map(detailGame => (
//                       <tr key={detailGame.games}>
//                         <td>
//                           <tr> <img src={detailGame.image_url} /> </tr>
//                         </td>
//                         <td>
//                           <tr> {detailGame.name} </tr>
//                         </td>
//                         <td>
//                           {detailGame.description}
//                         </td>
//                         <td>
//                           Minimum players: {detailGame.min_players}
//                         </td>
//                         <td>
//                           Maximum players: {detailGame.max_players}
//                         </td>
//                         <td>
//                           Minimum age: {detailGame.min_age}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//         </div>
//         </div>
// )}

// export default DetailPage


//  //  const handleOwnedClick = (e) => {
//     //     addNewGame(bgaID.bgaId, bgaID.name)
//     //     }

//       // const handleOwnedClick = e => {
//       // data.games( detailGame => {
//       //   map[detailGame.id, detailGame.name] = detailGame
//       // addNewGame(detailGame) }




// // addNewPost()
// //         .unwrap()
// //         .then((res) => console.log(res))
// //         .then((error) => {
// //           console.log(error)




// // import React, { useState, useEffect } from 'react';
// // import { Grid } from '@mui/material';
// // import { styled } from '@mui/material/styles';
// // import Paper from '@mui/material/Paper';
// // import Box from '@mui/material/Box';
// // import 'bootstrap/dist/css/bootstrap.css'
// // import './compy.css';
// // import { detailSlice } from "../app/detailApi";
// // import 'bootstrap/dist/css/bootstrap.css'


// // const Item = styled(Paper)(({ theme }) => ({
// //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
// //   ...theme.typography.body2,
// //   padding: theme.spacing(1),
// //   textAlign: 'center',
// //   color: theme.palette.text.secondary,
// //   }));


// // function DetailPage (props) {s
// //   const {useGetDetailQuery} = detailSlice
// //   const {data, isLoading} = useGetDetailQuery();
// //   const [collectionOfDetails, setCollectionOfDetails] = useState({})

// //     useEffect(() =>{
// //        if(favData){
// //         const map = {}
// //         data.games.forEach(game =>{
// //           map[game.image_url] = game
// //         })
// //         setCollectionOfDetails(map)

// //     }

// //     const handleChange = e =>{
// //       console.log('event',e,  e.target.value, 'collectionOfDetails', collectionOfDetails)
// //       const selectedGame = collectionOfDetails[e.target.value]
// //       setDetailGame(selectedGame)

// //     if(isLoading) {
// //       return null
// //     }

// //   return (
// //     <Box sx={{ flexGrow: 1 }}>
// //          <Grid container spacing={5}> {/* space between Items in grid */}
// //           <Grid item xs={6} md={5}>
// //             <Item> Game Details </Item>




// //         </Grid>
// //         </Grid>
// //         </Box>
// //   )

// // }


// // export default DetailPage
