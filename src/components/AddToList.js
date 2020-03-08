import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import {Row, Col, Button} from 'react-bootstrap';

class AddToList extends Component {
    state = {
        content: '',
        label: 'Music'
    }
    
    handleChange = (e) => {
        this.setState({
            content: e.target.value,
        })
    }
    handleChangeLabel = (e) => {
        this.setState({
            label: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            content: '',
            label: this.state.label
            
        });
        
    }
    render(){
        return(
            <div className="addForm">
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                    
                    <Col xs={8}>
                    <div className="addInput">
                        <input type="text" onChange={this.handleChange} value={this.state.content} placeholder="Add to your playlist" required></input>
                    </div>
                    </Col>
                    <Col>
                    <div className="selectInput">
                        <select value={this.state.label} onChange={this.handleChangeLabel}> 
                        <option value="Music">Music</option>
                        <option value="Video">Video</option>
                        </select>
                    </div>
                    </Col>
                    <Col>
                    <div className="addButton">
                    <Button variant="info" type="submit">Add</Button>
                    </div>
                    </Col>
                    </Row>
                    
                </Form> 
            </div>
        )
    }
}
export default AddToList;