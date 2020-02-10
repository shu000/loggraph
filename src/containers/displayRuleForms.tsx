import { connect } from 'react-redux';
import DisplayRuleForms from '../components/displayRuleForms';
import { AppState } from '../reducer';

interface StateProps {
  rulesCount: number;
}

const mapStateToProps = (state: AppState): StateProps => ({
  rulesCount: state.displayRules.rules.rules.length,
});

export default connect(mapStateToProps)(DisplayRuleForms);
