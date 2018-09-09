import React, { Component } from 'react';

class RefreshBtn extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const btnLabel = 'Refresh Current Title' 
        return ( 
            <input 
                type="button"
                onClick={this.props.ClickRefreshBtn}
                value={btnLabel}
            />
         );
    }
}
 
export default RefreshBtn;