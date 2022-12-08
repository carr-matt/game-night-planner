// import React, { useEffect } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import { useGetCarouselQuery } from '../app/carouselApi';
// import "./Carousel.css";
// import Container from "react-bootstrap/esm/Container";


// function DetailPage() {
//   const {data: carouselData, isLoading: carouselIsLoading } = useGetCarouselQuery();
//   // console.log(data);

//   if (carouselIsLoading){
//     return null
//   };

//   return (
//     <Container className="popular-game-carousel">
//       <Carousel style={{width: "100%"}}>
//         {carouselData.games?.map(popularGames => (
//           <Carousel.Item key={popularGames.id}>
//           <div>
//           <h4 className="game-title"> {popularGames.name} </h4>
//             <div style={{display: "flex"}}>
//               <span className='m-2' style={{width: '100%'}}>
//                 <img
//                   className="d-block"
//                   src={popularGames.image_url}
//                   alt="carousel-images"
//                   style={{width: '20%'}}
//                   />
//               </span>
//             </div>
//             </div>
//           </Carousel.Item>
//         ))
//         }
//       </Carousel>
//     </Container>
//   );
//       //   {data.games?.map(popularGame => (
//       //     <Carousel.Item key={popularGame["2"].id}>
//       //       <div style={{display: "flex"}}>
//       //         <span className='m-3' style={{width: "100%"}} >
//       //           <img
//       //             className="d-block w-20"
//       //             src={popularGame["2"].image_url}
//       //             alt="Second slide"
//       //             style={{width: "30%"}}
//       //           />
//       //         </span>
//       //       </div>
//       //     </Carousel.Item>
//       //   )
//       //     <Carousel.Item>
//       //       <div style={{display: "flex"}}>
//       //         <span className='m-3' style={{width: "100%"}} >
//       //           <img
//       //             className="d-block w-20"
//       //             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXVl0KDpMwIW-lbkbVnFk6xtqCsWF_d2C4zWb6V7b7qkPJkecxFIdMgpD05iZwEhkH7lc&usqp=CAU"
//       //             alt="Third slide"
//       //             style={{width: "16.7%"}}
//       //           />
//       //         </span>
//       //       </div>
//       //     </Carousel.Item>
//       // )}
// //       </Carousel>
// // </Container>
// // </div>
//       }
// export default DetailPage