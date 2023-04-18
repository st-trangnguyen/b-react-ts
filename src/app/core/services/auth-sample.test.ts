import { AuthSampleService } from './auth-sample.service';
import { AuthStorageService } from './authStorage.service';

const mockFunc = jest.fn();
jest.mock('./authStorage.service', () => {
  return {
    AuthStorageService: jest.fn(() => {
      return {
        ACCESS_TOKEN: 'token',
        setToken: mockFunc,
        getToken: mockFunc,
        removeToken: mockFunc
      };
    })
  };
});

describe('Test mock authStorage', () => {
  let authSample;
  let authStorage;

  beforeEach(() => {
    authSample = new AuthSampleService();
    authStorage = new AuthStorageService();
  });

  test('Check if setToken method on AuthStorageService instance is called', () => {
    const body = { username: 'username', password: 'password' };
    authSample.signIn(body);
    expect(authStorage.setToken).toBeCalled();
    expect(authStorage.setToken).toBeCalledWith('123');
  });
});
