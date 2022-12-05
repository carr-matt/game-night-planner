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
                <div className="card">

                    {data.games?.map(randomGame => (
                      <div key={randomGame.id}>

                        <img src={randomGame.image_url} className="card-img-top" alt="..." />
                        <div className="card-body">
                         <h3 className="card-title"> {randomGame.name} </h3>

                          <p className="card-text"> {randomGame.description} </p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
        </div>



)}

export default MainPage;
