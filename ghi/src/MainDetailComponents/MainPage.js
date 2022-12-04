//will need use effect to get the data for the filters
import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import { useGetRandomQuery } from '../app/randomApi';
import { useParams } from "react-router-dom";




function MainPage() {

   const { data, isLoading } = useGetRandomQuery();
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

export default MainPage
