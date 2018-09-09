import { connect } from 'react-redux'
import TitleSelect from "../components/TitleSelect";
import { postFetchThunk } from '../actions'

const mapStateToProps = (state, ownProps) => {
    return { 
        titleList: Object.keys(state.redditPosts),
        currentTitle: state.currentTitle 
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        selectNextTitle: (nextTitle) => { dispatch(postFetchThunk(nextTitle)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleSelect)
