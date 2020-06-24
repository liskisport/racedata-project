import React, { FC, ReactElement, MouseEvent } from 'react';
import { useRouter } from 'next/router';

import ROUTES from '../constants/routes';

const Main: FC = (): ReactElement => {
  const router = useRouter();
  
  const handleRaceListRouteButtonClick = (event: MouseEvent): void => {
    event.preventDefault();
    router.push(ROUTES.RACE_LIST);
  };

  return (
    <div className="Main Main-content">
      <h1 className="Main__Header">Главная страница</h1>
      <button
        className="Main__Button RaceListRouteButton"
        onClick={handleRaceListRouteButtonClick}
      >
        Список соревнований
      </button>
    </div>
  );
};

export default Main;