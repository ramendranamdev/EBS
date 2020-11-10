import React from 'react';
import {Header} from 'native-base';
import LeftBody from './LeftBody';
import RightBody from './RightBody';
import CenterBody from './CenterBody';

function Header1() {
  return (
    <Header>
      <LeftBody />
      {/* <CenterBody /> */}
      <RightBody />
    </Header>
  );
}

export default Header1;
