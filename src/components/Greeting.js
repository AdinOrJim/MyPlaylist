import React, { Component } from 'react';
import {Badge} from 'react-bootstrap'

class Greeting extends Component{
    constructor(props){
        super(props)
        this.user = localStorage.getItem('MyPlaylistName')
    }
    
    render(){
        if(this.user !== null){
            return (
                <div>
                <Badge className="badge" variant="secondary"><span>Hey {this.user}. Here are your goody-goodies :)</span></Badge>
                </div>
            )
        }
        return null
        
    }
}

export default Greeting;