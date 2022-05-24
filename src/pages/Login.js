import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = ({ setAuthenticate }) => {

    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        setAuthenticate(true);
        navigate("/");
    }

    return (
        <div>
            <Container className="login-area">
                <Form className="login-form" onSubmit={login}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    </Form.Group>
                    <Button variant="danger" type="submit">
                        로그인
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Login