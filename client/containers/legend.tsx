import { connect } from 'react-redux';
import DisplayRules from '../constants/displayRules';
import Legend from '../components/legend';
import { RootState } from '../reducer';

interface StateProps {
  rules: DisplayRules;
}

const mapStateToProps = (state: RootState): StateProps => ({
  rules: state.displayRules.rules,
});

export default connect(mapStateToProps)(Legend);
