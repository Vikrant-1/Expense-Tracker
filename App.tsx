import {NavigationContainer} from '@react-navigation/native';
import {DarkModeProvider} from 'react-native-dynamic';
import AppNavigator from './src/routes/AppNavigator';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <DarkModeProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      <Toast/>
    </DarkModeProvider>
  );
};

export default App;
