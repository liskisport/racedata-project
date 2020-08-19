import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import './Profile.pcss';

const mapStateToProps = (state) => ({
  user: state.user.user
});

type StateProps = ReturnType<typeof mapStateToProps>;

type Props = {
  className: string;
};

const Profile = ({ user, className }: Props & StateProps): JSX.Element => {
  const { name, surname, userId } = Object(user);
  const userAuthorized = userId !== null;
  return (
    <div className={cn('Profile', className)}>
      {!userAuthorized && (
        <div className="Profile__unauthorized">Войти</div>
      )}
      {userAuthorized && (
        <div className="Profile__authorized">{name} {surname}</div>
      )}
    </div>
  );
};

export default connect(mapStateToProps)(Profile);
