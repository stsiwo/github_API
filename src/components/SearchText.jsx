import React, { Component } from 'react';

class SearchText extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <input 
                type='text' 
                placeholder='enter your keyword title'
                value={this.props.text}
                onChange={(e) => this.props.handleChange(e.target.value)}
            />
        );
    }
}
 
export default SearchText;