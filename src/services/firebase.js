import auth from '@react-native-firebase/auth';
import {Toast} from '../utils/native';
import firestore from '@react-native-firebase/firestore';
import {LABELS} from '../labels';
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
    console.log('error', error.code);
    if (error.code === 'auth/user-not-found') {
      return 'That email address is not found!';
    } else if (error.code === 'auth/wrong-password') {
      return 'That password is incorrect!';
    } else if (error.code === 'auth/invalid-email') {
      return 'That email address is invalid!';
    } else {
      return 'Failed to login. Please try again later.';
    }
  }
};

export const forgetPassHandler = async email => {
  const message = await auth()
    .fetchSignInMethodsForEmail(email)
    .then(async res => {
      console.log('res', res);
      if (res.length > 0) {
        await auth().sendPasswordResetEmail(email);
        Toast(LABELS.emailSent);
        return null;
      } else {
        return 'Entered email address is not registered';
      }
    })
    .catch(err => {
      if (err.code === 'auth/invalid-email') {
        return 'Email address is not valid';
      }
    });
  return message;
};