import React, { Component } from 'react';

class TimeText extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const updateTime = new Date(this.props.receivedAt).toLocaleTimeString() 
        return ( 
            <p>{updateTime}</p>
         );
    }
}
 
export default TimeText;