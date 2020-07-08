import React, { FC, ReactElement, MouseEvent } from 'react';
import { useRouter } from 'next/router';

import ROUTES from '../constants/routes';

const Race: FC = (): ReactElement => {
  const router = useRouter();
  const n = null;
  const handleRaceListRouteButtonClick = (event: MouseEvent): void => {
    event.preventDefault();
    router.push(ROUTES.RACE_LIST);
  };

  return (
    <div className="Race Race-content">
      <h1 className="Race__Header">Информация о конкретном соревновании</h1>
      <button
        className="Race__Button RaceListRouteButton"
        onClick={handleRaceListRouteButtonClick}
      >
        К списку соревнований
      </button>
    </div>
  );
};

export default Race;
