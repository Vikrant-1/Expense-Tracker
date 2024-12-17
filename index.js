/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import { store } from './src/store/store';
import { PaperProvider } from 'react-native-paper';

const MainApp = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
