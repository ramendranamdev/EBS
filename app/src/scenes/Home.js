import React from 'react';
import {Button, Container, Text} from 'native-base';
import Header1 from '../components/Header1/Header1';
import Tabs1 from '../components/Tabs1/Tabs1';

function Home() {
  return (
    <Container>
      <Header1 />
      <Tabs1 />
    </Container>
  );
}

export default Home;
