import React, { Component } from 'react';
import AddToList from './AddToList';
import PlayListControl from './PlayListControl';
import {Container, Row, Col} from 'react-bootstrap'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      playlist: []
    }
  }
    deleteItem = (id) => {
      const playlist = this.state.playlist.filter(item => {
        return item.id !== id
      });
      this.setState({
        playlist: playlist
      })
      
    }
      addItem = (item) => {
        item.id = Math.random();
        let playlist=[...this.state.playlist, item];
        this.setState({
          playlist: playlist
        })
      }
  
    render(){
    return (
      <div className="playlist-app">
        <Container>
          <AddToList  addItem={this.addItem}/>
          <Row>
          <Col md={{ span: 6 }}>
          <h1 className="homeTitle">My Playlist</h1>
          </Col>
          </Row>
          <Row>
          <Col md={{ span: 6 }}>
          <PlayListControl playlist={this.state.playlist} deleteItem={this.deleteItem}/>
          </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
