import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, within, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import UserList from './UserList';

const dummyData = [
  {
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
  },
  {
    'id': 2,
    'name': 'Ervin Howell',
    'username': 'Antonette',
    'email': 'Shanna@melissa.tv',
    'address': {
      'street': 'Victor Plains',
      'suite': 'Suite 879',
      'city': 'Wisokyburgh',
      'zipcode': '90566-7771',
      'geo': {
        'lat': '-43.9509',
        'lng': '-34.4618'
      }
    },
    'phone': '010-692-6593 x09125',
    'website': 'anastasia.net',
    'company': {
      'name': 'Deckow-Crist',
      'catchPhrase': 'Proactive didactic contingency',
      'bs': 'synergize scalable supply-chains'
    }
  },
  {
    'id': 3,
    'name': 'Clementine Bauch',
    'username': 'Samantha',
    'email': 'Nathan@yesenia.net',
    'address': {
      'street': 'Douglas Extension',
      'suite': 'Suite 847',
      'city': 'McKenziehaven',
      'zipcode': '59590-4157',
      'geo': {
        'lat': '-68.6102',
        'lng': '-47.0653'
      }
    },
    'phone': '1-463-123-4447',
    'website': 'ramiro.info',
    'company': {
      'name': 'Romaguera-Jacobson',
      'catchPhrase': 'Face to face bifurcated interface',
      'bs': 'e-enable strategic applications'
    }
  },
  {
    'id': 4,
    'name': 'Patricia Lebsack',
    'username': 'Karianne',
    'email': 'Julianne.OConner@kory.org',
    'address': {
      'street': 'Hoeger Mall',
      'suite': 'Apt. 692',
      'city': 'South Elvis',
      'zipcode': '53919-4257',
      'geo': {
        'lat': '29.4572',
        'lng': '-164.2990'
      }
    },
    'phone': '493-170-9623 x156',
    'website': 'kale.biz',
    'company': {
      'name': 'Robel-Corkery',
      'catchPhrase': 'Multi-tiered zero tolerance productivity',
      'bs': 'transition cutting-edge web services'
    }
  },
  {
    'id': 5,
    'name': 'Chelsey Dietrich',
    'username': 'Kamren',
    'email': 'Lucio_Hettinger@annie.ca',
    'address': {
      'street': 'Skiles Walks',
      'suite': 'Suite 351',
      'city': 'Roscoeview',
      'zipcode': '33263',
      'geo': {
        'lat': '-31.8129',
        'lng': '62.5342'
      }
    },
    'phone': '(254)954-1289',
    'website': 'demarco.info',
    'company': {
      'name': 'Keebler LLC',
      'catchPhrase': 'User-centric fault-tolerant solution',
      'bs': 'revolutionize end-to-end systems'
    }
  }
];

describe('User List', () => {
  const initialState = {
    users: {
      data: dummyData
    }
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(initialState);
  const userListTmp = (
    <Provider store={store}>
      <UserList />
    </Provider>
  );

  test('Display loading screen while fetching users', () => {
    render(userListTmp, { wrapper: BrowserRouter });
    
    expect(screen.getByRole('heading')).toHaveTextContent('User List');
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  test('Display user list after fetching users successfull', async () => {
    render(userListTmp, { wrapper: BrowserRouter });

    await waitFor(() => {
      expect(screen.getByRole('list')).toBeInTheDocument();
    });

    const list = screen.getByRole('list');
    const { getAllByRole, getAllByTestId } = within(list);

    const items = getAllByRole('listitem');
    expect(items.length).toBe(5);

    const userFullNameItems = getAllByTestId('user-full-name', { exact: false });
    const userFullNames = userFullNameItems.map(item => item.textContent);
    expect(userFullNames).toEqual([
      'Leanne Graham',
      'Ervin Howell',
      'Clementine Bauch',
      'Patricia Lebsack',
      'Chelsey Dietrich',
    ]);

    const userEmailItems = getAllByTestId('user-email');
    const userEmails = userEmailItems.map(item => item.textContent);
    expect(userEmails).toEqual([
      'Sincere@april.biz',
      'Shanna@melissa.tv',
      'Nathan@yesenia.net',
      'Julianne.OConner@kory.org',
      'Lucio_Hettinger@annie.ca',
    ]);
  });

  test('Click on user item', async () => {
    render(userListTmp, { wrapper: BrowserRouter });

    await waitFor(() => {
      expect(screen.getByRole('list')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId('user-full-name-1', { exact: false }));
    await waitFor(() => {
      expect(screen.getByText('User Detail')).toBeInTheDocument();
    });
  });
});
