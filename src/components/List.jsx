import React, { Component } from 'react'
import ListItem from './ListItem'

class List extends Component {
    constructor(props) {
        super(props)
    }
    render() { 
        return ( 
            <ul>
                {
                    this.props.postList.map( (post, index) => {
                        return <ListItem key={index}>{post.title}</ListItem>
                    })
                }
            </ul>
        )
    }
}
 
export default List