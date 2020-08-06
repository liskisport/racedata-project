import React, { FC, ReactElement, MouseEvent, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { getMainData } from '../api/mainData';
import ROUTES from '../constants/routes';

const Main: FC = (): ReactElement => {
  const [data,
    setData] = useState<Record<string, unknown> | null>(null);
  const router = useRouter();

  useEffect(() => {
    getMainData().then(response => setData(response));
  }, []);

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
      <div className="Main-data">{data?.page}</div>
    </div>
  );
};

export default Main;
