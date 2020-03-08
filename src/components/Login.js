import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Form, Row, Col, Button, Container} from 'react-bootstrap';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            password: '',
            redirect: false
        }
        this.userName = localStorage.getItem('MyPlaylistName');
        this.userPass = localStorage.getItem('MyPlaylistPassword'); 
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        localStorage.setItem('MyPlaylistName', this.state.name);
        localStorage.setItem('MyPlaylistPassword', this.state.password);
        this.setState({
            redirect: true
        })
        this.forceUpdate();
    }

    render() {
        if (this.userName !== null) {
            console.log(this.userName);
          return <Redirect to={'/home'} />
        }else{
        return (
            <Container className="loginContainer">
                <Form className="loginForm" onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>
                        Enter your Username
                        </Form.Label>  
                        <Form.Control type="text" id="name" placeholder="Username" onChange={this.handleChange} required />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>
                        Enter your password
                        </Form.Label>
                        <Form.Control type="password" id="password" placeholder="Password" onChange={this.handleChange} required />
                    </Form.Group>
                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                </Form>
            </Container> 

        )
      }
    }
}

export default Login;