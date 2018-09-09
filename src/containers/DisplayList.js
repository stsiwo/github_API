import { connect } from 'react-redux'
import List from "../components/List";

const mapStateToProps = (state, ownProps) => {
    console.log(state.currentTitle)
    return { postList: state.redditPosts[state.currentTitle].items }
}

export default connect(mapStateToProps)(List)