import React from 'react';
import {Text, View} from 'react-native';

function Home() {
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          flex: 1,
          textAlign: 'center',
          textAlignVertical: 'center',
          fontSize: 48,
          fontWeight: '600',
          color: 'black',
        }}>
        Home
      </Text>
    </View>
  );
}

export default Home;
