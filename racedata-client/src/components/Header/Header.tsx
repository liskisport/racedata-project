import React, { FC, ReactElement } from 'react';

import './Header.pcss';

const Header: FC = (): ReactElement => {
  return (
    <div className="Header">
      <div className="Header__item">Главная</div>
      <div className="Header__item">Планируемые соревнования</div>
      <div className="Header__item">Мои соревнования</div>
    </div>
  );
};

export default Header;