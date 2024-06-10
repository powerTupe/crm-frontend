import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "./ResetLogin.css";

const ResetLogin = ({handleOnChange, handleOnSubmit, email, frmChangeFuc}) => {
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
                <Button type='submit' className='btn'>Reset Password </Button>
            </Form>
        </Col>
    </Row>
    <hr />
    <Row>
        <Col>
            <a href='#!' className='text-info' onClick={() => frmChangeFuc("Login")}> Login </a>
        </Col>
    </Row>
</Container>
  )
}

export default ResetLogin