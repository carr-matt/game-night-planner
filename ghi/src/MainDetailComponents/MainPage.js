//will need use effect to get the data for the filters
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/esm/Container";
import { useNavigate, Link } from 'react-router-dom'
import { randomSlice } from '../app/randomApi';



function MainPage(props) {

  // const [gameOfDay] = useState([]);

  // const { useGetRandomQuery } = randomSlice

  // useEffect(() => {
  //   async function queryRandomGame
  //     const response = await.fetch(randomSlice);
  //     if (response.ok) {
  //       const data = await response.json();
  //       this.setState({gameOfDay:data.gameofDay})
  //     }
  // })

  return (
    <div>
        <h1>Game Night Planner</h1>
        <h2>Never wonder what game you'll play next again!</h2>
        <br/>
        <Container>
        <h2>Random Game</h2>
        {/* <table className="table">
                <thead>
                    <tr>
                        <th className="table-head">Name</th>
                        <th className="table-head">Url</th>
                        <th className="table-head">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.gameOfDay.map(game => {
                        return(
                            <tr key={auto.id}>
                                <td className="model-text">{ game.name }</td>
                                <td className="model-text">{ game.image_url }</td>
                                <td className="model-text">{ game.description }</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table> */}

        </Container>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div>
  </div>
  );
}

export default MainPage;
