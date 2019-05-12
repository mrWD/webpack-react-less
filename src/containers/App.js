import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import newAction from '../actions/newAction'

import App from '../components/App'

const mapStateToProps = ({ newReducer }) => ({
  newReducer: newReducer.newReducer,
})

const mapDispatchToProps = dispatch => ({
  newAction: bindActionCreators(newAction, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
