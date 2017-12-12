import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import food from '../images/food.jpg';


const Home = () => (
  <Segment basic>
    <Header as='h1'> Not Really Awesome Restaurant  </Header>
    <img src={food} alt='food'/> 
  </Segment>
)

export default Home;