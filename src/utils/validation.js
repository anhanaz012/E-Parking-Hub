import {ERRORS} from '../labels/error';
import {Toast} from './native';
export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const isValidatedSignUp = ({
  fullName = '',
  email = '',
  password = '',
  carModel = '',
  phone = '',
  isChecked,
}) => {
  if (!fullName) {
    Toast(ERRORS.enterName);
    return false;
  }
  if (fullName.length < 3) {
    Toast(ERRORS.nameLength);
    return false;
  }
  if (!email) {
    Toast(ERRORS.enterEmail);
    return false;
  }
  if (EMAIL_REGEX.test(email) === false) {
    Toast(ERRORS.validEmail);
    return false;
  }
  if (!password) {
    Toast(ERRORS.enterPassword);
    return false;
  }
  if (password.length < 8) {
    Toast(ERRORS.passwordValidation);
    return false;
  }
  if (!carModel) {
    Toast(ERRORS.carModel);
    return false;
  }
  if (carModel.length < 4) {
    Toast(ERRORS.tooShort);
    return false;
  }
  if (!phone) {
    Toast(ERRORS.phoneEnter);
    return false;
  }
  if (!isChecked) {
    Toast(ERRORS.termsAndCondition);
    return false;
  }
  return true;
};
export const isValidatedLogin = ({email = '', password = ''}) => {
  console.log('email', email, 'password', password);
  if (!email) {
    Toast(ERRORS.email);
    return false;
  }
  if (!password) {
    Toast(ERRORS.enterPassword);
    return false;
  }
  return true;
};
