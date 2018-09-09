import { connect } from 'react-redux'
import RefreshBtn from "../components/RefreshBtn";
import { postFetchThunk } from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ClickRefreshBtn: () => { dispatch(postFetchThunk()) }
    } 
}

export default connect(null, mapDispatchToProps)(RefreshBtn)