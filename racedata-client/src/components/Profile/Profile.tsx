import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import { mapStateToProps, mapDispatchToProps, ReduxProps } from './reduxProps';

import './Profile.pcss';

type Props = {
  className: string;
};

const Profile = ({ user, userRequest, className }: Props & ReduxProps): JSX.Element => {
  const { name, surname } = Object(user);

  const handleButtonLoginClick = () => {
    userRequest({ login: 'login', password: 'password' });
  };

  return (
    <div className={cn('Profile', className)}>
      {!user && (
        <button
          className="Profile__buttonLogin"
          onClick={handleButtonLoginClick}
        >
          Войти
        </button>
      )}
      {user && (
        <div className="Profile__userData">{name} {surname}</div>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
