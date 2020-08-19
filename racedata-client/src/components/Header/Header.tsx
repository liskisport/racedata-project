import React, { FC, ReactElement } from 'react';

import Profile from '../Profile/Profile';

import './Header.pcss';

const Header: FC = (): ReactElement => {
  return (
    <div className="Header">
      <div className="Header__item Header__item-selected">
        Главная
      </div>
      <div className="Header__item">Планируемые соревнования</div>
      <div className="Header__item">Мои соревнования</div>
      <Profile className="Header__item" />
    </div>
  );
};

export default Header;
