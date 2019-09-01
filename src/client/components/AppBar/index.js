import { connect } from 'react-redux';
import { goBack, push } from 'connected-react-router';
// actions
// import * as actions from '../../../shared/actions/authActions';
// Component
import MainNav from './AppBar';


const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  goBack,
  push,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);
