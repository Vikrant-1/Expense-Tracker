import {NavigationContainer} from '@react-navigation/native';
import {DarkModeProvider} from 'react-native-dynamic';
import AppNavigator from './src/routes/AppNavigator';
import Toast from 'react-native-toast-message';
import {navigationRef} from './src/utils/navigationUtils';

const App = () => {
  return (
    <DarkModeProvider>
      <NavigationContainer ref={navigationRef}>
        <AppNavigator />
      </NavigationContainer>
      <Toast />
    </DarkModeProvider>
  );
};

export default App;
