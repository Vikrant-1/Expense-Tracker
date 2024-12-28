import {TouchableOpacity} from 'react-native';
import {navigationRef} from '../utils/navigationUtils';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const BackIcon = () => (
  <TouchableOpacity
    style={{
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 5,
    }}
    onPress={() => {
      navigationRef.goBack();
    }}>
    <MaterialIcons name="close" size={30} color="black" />
  </TouchableOpacity>
);
