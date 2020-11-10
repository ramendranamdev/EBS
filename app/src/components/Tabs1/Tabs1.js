import React from 'react';
import {Tab, TabHeading, Tabs, Icon} from 'native-base';
import Camera from './Tabs/Camera';

function Tabs1() {
  return (
    <Tabs transparent initialPage={1}>
      <Tab
        heading={
          <TabHeading>
            <Icon type="FontAwesome" name="camera" style={{fontSize: 24}} />
          </TabHeading>
        }>
        <Camera />
      </Tab>

      <Tab heading="Chat"></Tab>
      <Tab heading="Status"></Tab>
      <Tab heading="Call"></Tab>
    </Tabs>
  );
}

export default Tabs1;
