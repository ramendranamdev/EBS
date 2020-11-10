import {Button, Icon, Right, Text} from 'native-base';
import React from 'react';

function RightBody() {
  return (
    <Right>
      <Button transparent>
        <Icon type="MaterialIcons" name="chat" />
      </Button>
      <Button transparent>
        <Icon type="FontAwesome" name="search" />
      </Button>
      <Button transparent>
        <Icon type="SimpleLineIcons" name="options-vertical" />
      </Button>
    </Right>
  );
}

export default RightBody;
