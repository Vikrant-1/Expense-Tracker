import {NavigationContainer} from '@react-navigation/native';
import {DarkModeProvider} from 'react-native-dynamic';
import AppNavigator from './src/routes/AppNavigator';

const App = () => {
  return (
    <DarkModeProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </DarkModeProvider>
  );
};

export default App;
