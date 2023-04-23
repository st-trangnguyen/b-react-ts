import React from 'react';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, within, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from '@app/store';
import UserList from './UserList';

const dummyData = [
  [
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
    },
    {
      'id': 6,
      'name': 'Mrs. Dennis Schulist',
      'username': 'Leopoldo_Corkery',
      'email': 'Karley_Dach@jasper.info',
      'address': {
        'street': 'Norberto Crossing',
        'suite': 'Apt. 950',
        'city': 'South Christy',
        'zipcode': '23505-1337',
        'geo': {
          'lat': '-71.4197',
          'lng': '71.7478'
        }
      },
      'phone': '1-477-935-8478 x6430',
      'website': 'ola.org',
      'company': {
        'name': 'Considine-Lockman',
        'catchPhrase': 'Synchronised bottom-line interface',
        'bs': 'e-enable innovative applications'
      }
    },
    {
      'id': 7,
      'name': 'Kurtis Weissnat',
      'username': 'Elwyn.Skiles',
      'email': 'Telly.Hoeger@billy.biz',
      'address': {
        'street': 'Rex Trail',
        'suite': 'Suite 280',
        'city': 'Howemouth',
        'zipcode': '58804-1099',
        'geo': {
          'lat': '24.8918',
          'lng': '21.8984'
        }
      },
      'phone': '210.067.6132',
      'website': 'elvis.io',
      'company': {
        'name': 'Johns Group',
        'catchPhrase': 'Configurable multimedia task-force',
        'bs': 'generate enterprise e-tailers'
      }
    },
    {
      'id': 8,
      'name': 'Nicholas Runolfsdottir V',
      'username': 'Maxime_Nienow',
      'email': 'Sherwood@rosamond.me',
      'address': {
        'street': 'Ellsworth Summit',
        'suite': 'Suite 729',
        'city': 'Aliyaview',
        'zipcode': '45169',
        'geo': {
          'lat': '-14.3990',
          'lng': '-120.7677'
        }
      },
      'phone': '586.493.6943 x140',
      'website': 'jacynthe.com',
      'company': {
        'name': 'Abernathy Group',
        'catchPhrase': 'Implemented secondary concept',
        'bs': 'e-enable extensible e-tailers'
      }
    },
    {
      'id': 9,
      'name': 'Glenna Reichert',
      'username': 'Delphine',
      'email': 'Chaim_McDermott@dana.io',
      'address': {
        'street': 'Dayna Park',
        'suite': 'Suite 449',
        'city': 'Bartholomebury',
        'zipcode': '76495-3109',
        'geo': {
          'lat': '24.6463',
          'lng': '-168.8889'
        }
      },
      'phone': '(775)976-6794 x41206',
      'website': 'conrad.com',
      'company': {
        'name': 'Yost and Sons',
        'catchPhrase': 'Switchable contextually-based project',
        'bs': 'aggregate real-time technologies'
      }
    },
    {
      'id': 10,
      'name': 'Clementina DuBuque',
      'username': 'Moriah.Stanton',
      'email': 'Rey.Padberg@karina.biz',
      'address': {
        'street': 'Kattie Turnpike',
        'suite': 'Suite 198',
        'city': 'Lebsackbury',
        'zipcode': '31428-2261',
        'geo': {
          'lat': '-38.2386',
          'lng': '57.2232'
        }
      },
      'phone': '024-648-3804',
      'website': 'ambrose.net',
      'company': {
        'name': 'Hoeger LLC',
        'catchPhrase': 'Centralized empowering task-force',
        'bs': 'target end-to-end models'
      }
    }
  ]
];

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('User List', () => {
  const userListTmp = (
    <Provider store={store}>
      <UserList />
    </Provider>
  );

  test('Display empty when fetch error', async () => {
    server.use(
      rest.get('users', (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );
    render(userListTmp, { wrapper: BrowserRouter });
    await waitFor(() => {
      expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByRole('listitem')).not.toBeInTheDocument();
    });
  });

  test('Display loading screen while fetching users', () => {
    server.use(
      rest.get('users', (req, res, ctx) => {
        return res(
          ctx.json(dummyData)
        );
      })
    );
  
    render(userListTmp, { wrapper: BrowserRouter });
    
    expect(screen.getByRole('heading')).toHaveTextContent('User List');
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  test('Display user list after fetching users successfull', async () => {
    server.use(
      rest.get('users', (req, res, ctx) => {
        return res(
          ctx.json(dummyData)
        );
      })
    );

    render(userListTmp, { wrapper: BrowserRouter });

    await waitFor(() => {
      expect(screen.getByRole('list')).toBeInTheDocument();
    });

    const list = screen.getByRole('list');
    const { getAllByRole, getAllByTestId } = within(list);

    const items = getAllByRole('listitem');
    expect(items.length).toBe(10);

    const userFullNameItems = getAllByTestId('user-full-name', { exact: false });
    const userFullNames = userFullNameItems.map(item => item.textContent);
    expect(userFullNames).toEqual([
      'Leanne Graham',
      'Ervin Howell',
      'Clementine Bauch',
      'Patricia Lebsack',
      'Chelsey Dietrich',
      'Mrs. Dennis Schulist',
      'Kurtis Weissnat',
      'Nicholas Runolfsdottir V',
      'Glenna Reichert',
      'Clementina DuBuque'
    ]);
  });

  // test('Click on user item', async () => {
  //   render(userListTmp, { wrapper: BrowserRouter });

  //   await waitFor(() => {
  //     expect(screen.getByRole('list')).toBeInTheDocument();
  //   });

  //   fireEvent.click(screen.getByTestId('user-full-name-1', { exact: false }));
  //   await waitFor(() => {
  //     expect(screen.getByText('User Detail')).toBeInTheDocument();
  //   });
  // });
});
