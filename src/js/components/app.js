export default class LoginValidator {
    static check(login) {
      const regString = /^[a-z][a-z\d\-_]+[a-z]$/;
      const regInt = /\d{4,}/;
      if (!regString.test(login) || regInt.test(login)) {
        throw new Error('Bad login');
      }
      return true;
    }
  }
