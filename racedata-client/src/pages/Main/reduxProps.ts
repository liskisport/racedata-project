import { createStructuredSelector } from 'reselect';

import { userDataSelector } from '../../store/selectors/userSelector';

export const mapStateToProps = createStructuredSelector({
  user: userDataSelector,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export type ReduxProps = StateProps;
