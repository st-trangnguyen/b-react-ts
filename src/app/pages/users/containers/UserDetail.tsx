import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { RootState, useAppDispatch, useAppSelector } from '@app/store';
import { fetchUserDetail } from '../user.middleware';
import Loading from '@app/shared/components/common/Loading';

const UserDetail = () => {
  const { userDetail } = useAppSelector((state: RootState) => state.users);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      dispatch(fetchUserDetail(id))
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  }, [id]);

  return (
    <>
      <h1>User Detail</h1>
      {
        isLoading
        ? <Loading />
        : (
          <div data-testid="user-info">
            <p data-testid="user-id">ID: { userDetail?.id }</p>
            <p data-testid="user-full-name">Name: { userDetail?.name }</p>
            <p data-testid="user-email">Email: { userDetail?.email }</p>
          </div>
        )
      }
    </>
  );
};

export default UserDetail;
