import auth from '@react-native-firebase/auth';

export const getCurrentUserId = () => {
  return auth().currentUser?.uid;
};

export const authSignOut = async () => {
  return auth().signOut();
};
