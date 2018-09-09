import React, { Component } from 'react'
import Form from './Form'
import RefreshEventBtn from '../containers/RefreshEventBtn'
import UpdateTimeText from '../containers/UpdateTimeText'
import ChangeTitleSelect from '../containers/ChangeTitleSelect'

class Controller extends Component {
    
    render() { 
        return (  
            <React.Fragment>
                <Form></Form>
                <RefreshEventBtn></RefreshEventBtn>
                <UpdateTimeText></UpdateTimeText>
                <ChangeTitleSelect></ChangeTitleSelect>
            </React.Fragment>
        )
    }
}
 
export default Controller
