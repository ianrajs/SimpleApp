import {
    createAppContainer,
    createStackNavigator,
  } from 'react-navigation';

import Home from './Home';
import Detail from './Detail';
  
  const AppNavigator = createStackNavigator(
    {
      Home: {
        screen: Home,
          navigationOptions: {
          headerTitle: 'List Product',
          } 
        },
      Detail: {
        screen: Detail,
        navigationOptions: {
          headerTitle: 'Detail Product',
        },
      },
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        headerBackTitle: null,
        headerTintColor: '#53616C',
        headerStyle: {
          textAlign: 'left',
          borderBottomWidth: 0,
          elevation: 0,
          marginTop: 0,
        },
      },
      transitionConfig: () => ({
        screenInterpolator: (sceneProps) => {
          // right to left transition
          const { layout, position, scene } = sceneProps;
          const { index } = scene;
          const width = layout.initWidth;
  
          const translateX = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [width, 0, 0],
          });
  
          const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1],
          });
  
          return { opacity, transform: [{ translateX }] };
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    },
  );

export default createAppContainer(AppNavigator);
  