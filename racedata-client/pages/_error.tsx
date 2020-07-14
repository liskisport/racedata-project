import React from 'react';
import { NextPageContext } from 'next';

type ErrorProps = {
  statusCode: number
};

const Error = ({ statusCode }: ErrorProps): JSX.Element => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
