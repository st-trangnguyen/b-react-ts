import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, within, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import UserDetail from './UserDetail';

const dummyData = {
  'id': 1,
  'name': 'Leanne Graham',
  'username': 'Bret',
  'email': 'Sincere@april.biz',
  'address': {
    'street': 'Kulas Light',
    'suite': 'Apt. 556',
    'city': 'Gwenborough',
    'zipcode': '92998-3874',
    'geo': {
      'lat': '-37.3159',
      'lng': '81.1496'
    }
  },
  'phone': '1-770-736-8031 x56442',
  'website': 'hildegard.org',
  'company': {
    'name': 'Romaguera-Crona',
    'catchPhrase': 'Multi-layered client-server neural-net',
    'bs': 'harness real-time e-markets'
  }
};

describe('User Detail', () => {
  const initialState = {
    users: {
      userDetail: dummyData
    }
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(initialState);
  const userDetailTmp = (
    <Provider store={store}>
      <UserDetail />
    </Provider>
  );

  test('Display loading screen while fetching user', () => {
    render(userDetailTmp, { wrapper: BrowserRouter });
    
    expect(screen.getByRole('heading')).toHaveTextContent('User Detail');
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  test('Display user detail after fetching successfull', async () => {
    render(userDetailTmp, { wrapper: BrowserRouter });

    await waitFor(() => {
      expect(screen.getByTestId('user-info')).toBeInTheDocument();
    });

    expect(screen.getByTestId('user-id').innerHTML).toBe('ID: 1');
    expect(screen.getByTestId('user-full-name').innerHTML).toBe('Name: Leanne Graham');
    expect(screen.getByTestId('user-email').innerHTML).toBe('Email: Sincere@april.biz');
  });
});
