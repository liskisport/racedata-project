import React, { FC, ReactElement, MouseEvent } from 'react';
import { useRouter } from 'next/router';

import ROUTES from '../constants/routes';

const RaceList: FC = (): ReactElement => {
  const router = useRouter();

  const handleRaceRouteButtonClick = (event: MouseEvent): void => {
    event.preventDefault();
    router.push(ROUTES.RACE);
  };

  const handleMainRouteButtonClick = (event: MouseEvent): void => {
    event.preventDefault();
    router.push(ROUTES.MAIN);
  };

  return (
    <div className="RaceList-content">
      <h1 className="RaceList__Header">Информация обо всех проходящих соревнованиях</h1>
      <button
        className="RaceList__Button MainRouteButtonClick"
        onClick={handleMainRouteButtonClick}
      >
        На главную
      </button>
      <button
        className="RaceList__Button RaceRouteButton"
        onClick={handleRaceRouteButtonClick}
      >
        К соревнованию
      </button>
    </div>
  );
}
export default RaceList;