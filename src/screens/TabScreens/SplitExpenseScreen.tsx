import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {hasGroupsSelector} from '../../store/selectors/groupSelector';
import {EmptyScreenView} from '../../components/common/EmptyView';
import { useNavigation } from '@react-navigation/native';

const SplitExpenseScreen = () => {
  const navigation = useNavigation();
  const hasGroups = useSelector(hasGroupsSelector);

  if (!hasGroups) {
    return (
      <EmptyScreenView
        title="Let's create your first group"
        icon="group" // Example icon
        description="You don’t have any groups yet. Start by creating one to split expenses with your friends or colleagues."
        actionTitle="Create Group"
        action={() => navigation.navigate('CreateSplitGroup')} // Navigate to the create group screen
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text>SplitExpenseScreen</Text>
    </View>
  );
};

export default SplitExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
