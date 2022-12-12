import { useNavigate, Link } from 'react-router-dom'
import { useGetRandomQuery } from '../app/randomApi';
import React, { useEffect } from 'react';
import "./MainPage.css";
import Container from "react-bootstrap/esm/Container";




function MainPage() {



  const { data: randomData, isLoading: randomIsLoading} = useGetRandomQuery();


   if (randomIsLoading) {
    return null}


  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');

  }

  const refreshPage = () => {
    window.location.reload();

  }


  return (
    <React.Fragment>
    <div className="main-page">
      <Container className="banner px-4 mb-5 mt-5 text-center rounded">
        <h1>Game Night Planner</h1>
        <h5>Never wonder what game you'll play next again!</h5>
      </Container>
      <div>
        <Container className="random-game-container">
            <div className="col">
              <div className="card bg-dark">
                <div className="card-header">
                  <h2 onClick={refreshPage} to="/">Generate a Random Game</h2>
                </div>
                  <div className="image-card">
                    {randomData.games?.map(randomGame => (
                        <div key={randomGame.id}>

                          <img src={randomGame.image_url} onClick={() => openInNewTab(`${process.env.PUBLIC_URL}/detail/${randomGame.id}`)} className="random-img" alt="..." />
                          <div className="card-body">
                          <h3 className="card-title"> {randomGame.name} </h3>

                            <p className="card-text"> {randomGame.description} </p>
                          </div>
                        </div>
                    )
                    )};
                    </div>
                </div>
            </div>
          </Container>
      </div>
      <div>
      </div>
      </div>
      </React.Fragment>
);
            }
export default MainPage;
