import Expo from 'expo';
import { StackNavigator } from 'react-navigation';
import App from './src/App';
import Example1 from './src/Example1';
import Example2 from './src/Example2';
import Example3 from './src/Example3';

const MainNavigator = StackNavigator({
  Main: { screen: App },
  Example1: { screen: Example1 },
  Example2: { screen: Example2 },
  Example3: { screen: Example3 },
});

Expo.registerRootComponent(MainNavigator);
