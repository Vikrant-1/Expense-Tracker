import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {THEME} from '../../constants/colors';

export const AuthHeaderView = ({title, onPress}: {title: string; onPress: () => void}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          name="chevron-left"
          color={THEME.keppel.DEFAULT}
          size={30}
          style={{width: 30}}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '600',
          color: THEME.keppel.DEFAULT,
        }}>
        {title}
      </Text>
      <View style={{width: 40, height: 40}} />
    </View>
  );
};
