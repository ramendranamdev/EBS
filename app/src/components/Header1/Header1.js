import React from 'react';
import {Header} from 'native-base';
import LeftBody from './LeftBody';
import RightBody from './RightBody';
import CenterBody from './CenterBody';
import {colors} from './../../../res/colors';

function Header1() {
  return (
    <Header hasTabs>
      <LeftBody />
      {/* <CenterBody /> */}
      <RightBody />
    </Header>
  );
}

export default Header1;
