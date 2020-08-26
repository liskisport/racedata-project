import { createStructuredSelector } from 'reselect';

import { userDataSelector } from '../../store/selectors/userSelector';
import { userRequest } from '../../store/actions/userRequest';

export const mapStateToProps = createStructuredSelector({
  user: userDataSelector,
});

export const mapDispatchToProps = {
  userRequest
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export type ReduxProps = StateProps & DispatchProps;
