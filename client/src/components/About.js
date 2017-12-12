import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

const About = () => (
  <Segment basic>
    <Header as='h1'> About </Header>
    <p> This restaurant app was developed out of the necessity to learn React. 
    The developer wishes it looked better and was more functional, 
    but is still confused a lot of the times. </p>
  </Segment>
)

export default About;