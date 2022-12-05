import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './compy.css';
import { detailSlice } from "../app/detailApi"; 
import 'bootstrap/dist/css/bootstrap.css'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  }));

  
function DetailPage () {
  const {useGetDetailQuery} = detailSlice
  const {data, isLoading} = useGetDetailQuery();

  
  return (
    <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={5}> {/* space between Items in grid */}
          <Grid item xs={6} md={5}>
            <Item> Carousel </Item>
             <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQur47lwC0ZEBPCrcP9u5nZRkS0PXDKcs4KpnqUicNUME4Re7l53fl81kmGn8hTIpn1-S0&usqp=CAU" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQDIlmMmQdAc5hB324W99Ysep8_gPW4JpUQ&usqp=CAU" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXVl0KDpMwIW-lbkbVnFk6xtqCsWF_d2C4zWb6V7b7qkPJkecxFIdMgpD05iZwEhkH7lc&usqp=CAU" className="d-block w-100" alt="..."/>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
        </div>
        
        </Grid> 
        </Grid>
        </Box>
  )

}

export default DetailPage
