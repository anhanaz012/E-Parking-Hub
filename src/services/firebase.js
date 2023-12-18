import auth from '@react-native-firebase/auth';
export const RegistrationHandler = async ({email, password}) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    return null;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return 'That email address is already in use!';
    } else if (error.code === 'auth/invalid-email') {
      return 'That email address is invalid!';
    } else {
      console.log(error);
      return 'Failed to create user account. Please try again later.';
    }
  }
};
export const LoginHandler = async ({email, password}) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    return null;
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      return 'That email address is not found!';
    } else if (error.code === 'auth/invalid-email') {
      return 'That email address is invalid!';
    } else if (error.code === 'auth/invalid-credential') {
      return 'Credentials does not match. Please check your credentials!';
    } else {
      console.log(error.code);
      return 'Failed to login. Please try again later.';
    }
  }
};
