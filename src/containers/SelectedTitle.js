import { connect } from 'react-redux'
import Title from "../components/Title";

const mapStateToProps = (state, ownProps) => {
    return { currentTitle: state.currentTitle }
}


export default connect(mapStateToProps)(Title)