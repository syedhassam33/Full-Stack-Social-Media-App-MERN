import React from 'react'
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import Posts from './components/Posts/Posts.js'
import Forms from './components/Forms/Forms.js'
import { getPosts } from './actions/post.js';
import pbook from './images/pbook.jpg';


export const App = () => {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPosts);
  }, [dispatch]);
  return (
    <Container maxwidth="lg">
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>Collections</Typography>
        <img  src={pbook} alt="Posts Collections" height="60"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify ="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Forms/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;