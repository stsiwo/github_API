import React, { Component } from 'react';

class SearchBtn extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const btnLabel = 'Search New Title' 
        return ( 
            <input 
                type="button"
                onClick={this.props.ClickSearchBtn}
                value={btnLabel}
            />
        );
    }
}
 
export default SearchBtn;