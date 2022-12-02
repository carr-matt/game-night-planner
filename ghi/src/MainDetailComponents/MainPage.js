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

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cf.geekdo-images.com/9nGoBZ0MRbi6rdH47sj2Qg__opengraph/img/ol4aoxymd2wCRep9sMujnrx9n_s=/fit-in/1200x630/filters:strip_icc()/pic5786795.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 className="slide-label">Monopoly</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.boardgamequest.com/wp-content/uploads/2013/04/Settlers-of-Catan.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 className="slide-label">Settlers of Catan</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cf.geekdo-images.com/c4S2XDRb_DCYCAV-ZAzDpg__opengraph/img/J3e9QE8R-Jc9-Njtj0Mpoh4oT4I=/fit-in/1200x630/filters:strip_icc()/pic288405.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 className="slide-label">Life</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  );
}

export default MainPage;
