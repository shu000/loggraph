import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppAction, onCloseFeedback } from '../actions/app';
import Feedback from '../components/feedback';
import { RootState } from '../reducer';

interface StateProps {
  open: boolean;
  isSucceed: boolean;
  message: string;
}

interface DispatchProps {
  onClose: () => void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  open: state.app.isFeedbackOpen,
  isSucceed: state.app.isSucceed,
  message: state.app.feedbackMessage,
});

const mapDispatchToProps = (dispatch: Dispatch<AppAction>): DispatchProps => ({
  onClose: () => dispatch(onCloseFeedback()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
