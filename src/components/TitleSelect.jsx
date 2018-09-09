import React, { Component } from 'react';

class TitleSelect extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <select value={this.props.currentTitle} onChange={(e) => this.props.selectNextTitle(e.target.value)}>
                {this.props.titleList.map( (title, index) => {
                    return <option key={title} value={title}>{title}</option>
                })} 
            </select>
         );
    }
}
 
export default TitleSelect;