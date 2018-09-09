import React, { Component } from 'react';
import Header from "./Header";
import Controller from "./Controller";
import DisplayList from "../containers/DisplayList";

class RedditApp extends Component {
    
    render() { 
        return (
            <React.Fragment>
                <Header/> 
                <Controller/>
                <DisplayList/>
            </React.Fragment>
         );
    }
}
 
export default RedditApp;
