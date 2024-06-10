import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './LoginForm.css';

const LoginForm = ({handleOnChange, handleOnSubmit, email, password, frmChangeFuc}) => {
  return (
    <Container>
        <Row>
            <Col>
                <h1 className='text-info text-center'>Client Login</h1>
                <hr />
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type='email'
                            name='email'
                            value={email}
                            onChange={handleOnChange}
                            placeholder='Enter Email'
                            required >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            name='password'
                            value={password}
                            onChange={handleOnChange}
                            required >
                        </Form.Control>
                    </Form.Group>
                    <Button type='submit' className='btn'>Login</Button>
                </Form>
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <a href='#!' className='text-info' onClick={() => frmChangeFuc("Reset")}> Forgot Password ?</a>
            </Col>
        </Row>
    </Container>
  )
}

export default LoginForm