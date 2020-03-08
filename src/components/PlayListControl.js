import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'
import {Row, Col} from 'react-bootstrap';

class PlayListControl extends Component{
    constructor(props){
        super(props);
        this.state = {currentView : 'All'}
    }

    handleClickAll = () => {
        this.setState({currentView: 'All'})
    }
    handcleClickMusic = () => {
        this.setState({currentView: 'Music'})
    }
    handleClickVideo = () => {
        this.setState({currentView: 'Video'})
    }
    
    
    render(){
        const currentView = this.state.currentView;
        let displayView;
        
        if (currentView === "All"){
            displayView = 
            this.props.playlist.length ? (
            this.props.playlist.map(item => {
                return (
                    <ListGroup key={item.id}>
                    <ListGroup.Item>
                    <div className="playlistItem">
                        <Row>
                        <Col>
                        <span>{item.content}</span>
                        </Col>
                        <Col>
                        <Button variant="danger" onClick={() => {this.props.deleteItem(item.id)}}>Remove</Button>
                        </Col>
                        </Row>
                    </div>
                    </ListGroup.Item>
                    </ListGroup>
                )
            })
        ) : (
            <p className="notYet">You don't have anything on your playlist just yet :(</p>
        );
            }else if(currentView === "Music"){

            
        const music = this.props.playlist.filter((music) => music.label === "Music");
         displayView = music.length? (
            music.map(item => {
            return(
                <ListGroup key={item.id}>
                    <ListGroup.Item>
                    <div className="playlistItem">
                    <Row>
                        <Col>
                        <span>{item.content}</span>
                        </Col>
                        <Col>
                        <Button variant="danger" onClick={() => {this.props.deleteItem(item.id)}}>Remove</Button>
                        </Col>
                        </Row>
                    </div>
                    </ListGroup.Item>
                    </ListGroup>
            )
        })
        ) : (
            <p className="notYet"><b>You have no music added yet!</b> Youtube is a great place to start looking for some content :)</p>
        );
            }else if(currentView === "Video"){

            
        const video = this.props.playlist.filter((video) => video.label === "Video");
        displayView = video.length? (
            video.map(item => {
            return (
                <ListGroup key={item.id}>
                    <ListGroup.Item>
                    <div className="playlistItem">
                    <Row>
                        <Col>
                        <span>{item.content}</span>
                        </Col>
                        <Col>
                        <Button variant="danger" onClick={() => {this.props.deleteItem(item.id)}}>Remove</Button>
                        </Col>
                        </Row>
                    </div>
                    </ListGroup.Item>
                    </ListGroup>
            )
        })
        ) : (
            <p className="notYet"><b>You have no videos added yet!</b> Youtube is a great place to start looking for some content :) <span className="">Quick suggestion - Russian man with his Army of Ducks</span> </p>
        );
            }
        return (
            <div className="playlist">
                <div className="control-buttons">
                    <Button variant="outline-info" onClick={this.handleClickAll}>All</Button>
                    <Button variant="outline-info" onClick={this.handcleClickMusic}>Music</Button>
                    <Button variant="outline-info" onClick={this.handleClickVideo}>Video</Button>
                </div> 
                {displayView}
            </div>
        )
    }
}
export default PlayListControl;