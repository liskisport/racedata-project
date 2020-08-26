import React, { MouseEvent, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import { getMainData } from '../../api/mainApi';
import ROUTES from '../../constants/routes';
import { mapStateToProps, ReduxProps } from './reduxProps';

const Main = ({ user }: ReduxProps): JSX.Element => {
  const { name, middlename } = Object(user);
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
      {user && <div>Добро пожаловать, {name} {middlename}!</div>}
    </div>
  );
};

export default connect(mapStateToProps)(Main);
