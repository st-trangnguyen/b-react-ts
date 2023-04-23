import React from 'react';
import { Link } from 'react-router-dom';

import User from '@app/shared/model/user.model';

type UserItemProps = {
  user: User
}

const UserItem = ({ user }: UserItemProps) => {
  return (
    <li className="user-item">
      <span>{ user.id }</span>
      <Link to={user.id.toString()} data-testid={`user-full-name user-full-name-${user.id}`}>{ user.name }</Link>
      <p data-testid="user-email">{ user.email }</p>
    </li>
  );
};

export default UserItem;
