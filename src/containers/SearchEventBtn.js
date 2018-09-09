import { connect } from 'react-redux'
import SearchBtn from "../components/SearchBtn";
import { postFetchThunk } from '../actions'

const mapStateToProps = (state, ownProps) => {
    return { currentTitle: state.currentTitle }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ClickSearchBtn: () => dispatch(postFetchThunk(ownProps.text)) 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBtn)
