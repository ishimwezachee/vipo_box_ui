import { AppRegistry } from 'react-native';
import App from './app/navigations/mainStacks/MainRoot';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
