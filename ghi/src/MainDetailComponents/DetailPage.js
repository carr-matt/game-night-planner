import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import { useGetDetailQuery } from '../app/detailApi';
import { useParams } from "react-router-dom";
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
        }) }
        }

      const handleFavoriteClick = e => {
       {data.games?.map( detailGame => {
        const idData = detailGame.id
        const nameData = detailGame.name
        return addFavorite(idData, nameData, tokenData.account.username)
        }) }
        }

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


 