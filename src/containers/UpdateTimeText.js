import { connect } from 'react-redux'
import TimeText from "../components/TimeText";

const mapStateToProps = (state, ownProps) => {
    console.log(state.redditPosts[state.currentTitle].receivedAt)
    return { receivedAt: state.redditPosts[state.currentTitle].receivedAt }
}


export default connect(mapStateToProps)(TimeText)