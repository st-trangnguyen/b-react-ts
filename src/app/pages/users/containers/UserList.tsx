import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '@app/store';

import { fetchUsers } from '../user.middleware';

const UserList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  });
  return <></>;
};

export default UserList;
