import { connect } from 'react-redux';
import Legends from '../components/legends';
import { RootState } from '../reducer';

interface StateProps {
  selectingCustomerName: string;
  rulesCount: number;
}

const mapStateToProps = (state: RootState): StateProps => ({
  selectingCustomerName: state.customers.selectingCustomerName,
  rulesCount: state.displayRules.rules.rules.length,
});

export default connect(mapStateToProps)(Legends);
