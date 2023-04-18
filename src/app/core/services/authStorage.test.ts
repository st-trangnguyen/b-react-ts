import { AuthStorageService } from './authStorage.service';

describe('Check if localStorage funtions work', () => {
  const setItemMock = jest.spyOn(Storage.prototype, 'setItem');
  const getItemMock = jest.spyOn(Storage.prototype, 'getItem');
  const removeItemMock = jest.spyOn(Storage.prototype, 'removeItem');

  const authStorage = new AuthStorageService();

  test('localStorage.setItem is not called when token is falsy', () => {
    authStorage.setToken('');

    expect(setItemMock).not.toBeCalled();
  });

  test('localStorage.setItem is called when set token', () => {
    authStorage.setToken('123');

    expect(setItemMock).toBeCalled();
  });
  test('localStorage.setItem is called and save correct value', () => {
    authStorage.setToken('123');

    expect(setItemMock).toBeCalledWith(authStorage.ACCESS_TOKEN, '123');
  });

  test('localStorage.getItem is called', () => {
    authStorage.setToken('123');
    authStorage.getToken();
    
    expect(getItemMock).toBeCalled();
  });

  test('localStorage.getItem return correct value', () => {
    authStorage.setToken('123');
    authStorage.getToken();

    expect(getItemMock.mock.results[0].value).toBe('123');
  });

  test('localStorage.removeItem is called', () => {
    authStorage.removeToken();

    expect(removeItemMock).toBeCalled();
  });

  test('localStorage.removeItem is called and token is clear', () => {
    authStorage.removeToken();

    expect(authStorage.getToken()).toBe(null);
  });
});
