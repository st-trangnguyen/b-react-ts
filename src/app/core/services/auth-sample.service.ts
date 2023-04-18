import { AuthStorageService } from './authStorage.service';

export class AuthSampleService {
  authStorage;
  constructor() {
    this.authStorage = new AuthStorageService();
  }

  signIn(body: any) {
    /* this is the default signIn,
      If you want to override it, please write the same function in specific type of auth.
    */
    this.authStorage.setToken('123');
  }

  getUserInfo() {
    //
  }

  signOut() {
    //
  }
}
