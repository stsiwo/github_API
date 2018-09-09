import React, { Component } from 'react';
import SearchText from './SearchText'
import SearchEventBtn from '../containers/SearchEventBtn'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        }
       this.handleSearchTextChange = this.handleSearchTextChange.bind(this) 
    }

    handleSearchTextChange(targetText) {
        return this.setState({ inputText: targetText})
    }

    render() { 
        return ( 
            <React.Fragment>
                <SearchText text={this.state.inputText} handleChange={this.handleSearchTextChange} />
                <SearchEventBtn text={this.state.inputText}/>
            </React.Fragment>
         );
    }
}
 
export default Form;