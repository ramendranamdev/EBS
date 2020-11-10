//define routes here for react-navigation
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function Routes(params) {
  return;
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>;
}

export default Routes;
