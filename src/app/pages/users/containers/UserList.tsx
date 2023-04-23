import React, { useEffect, useState } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '@app/store';

import { fetchUsers } from '../user.middleware';
import { resetUserList } from '../user.slice';
import UserItem from '../partials/UserItem';
import Loading from '@app/shared/components/common/Loading';

const UserList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { data } = useAppSelector((state: RootState) => state.users);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchUsers())
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        window.alert('Oops, failed to fetch!');
      });
    return () => {
      dispatch(resetUserList());
    };
  }, []);

  return (
    <>
      <h1>User List</h1>
      {
        isLoading
        ? <Loading />
        : (
          <ul className='user-list'>
            { data.map(user => <UserItem key={user.id} user={ user } />)}
          </ul>
        )
      }
    </>
  );
};

export default UserList;
