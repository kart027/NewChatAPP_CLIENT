/* eslint-disable no-unused-vars */
import React from 'react'
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap"

const Login = () => {
  return (
  <>
          <>
              <Form>
                  <Row style={{
                      height: "100vh",
                      justifyContent: "center",
                      paddingTop: "10%"
                  }}>
                      <Col xs={6}>
                          <Stack gap={3}>
                              <h2>Register</h2>
                              <Form.Control type='text' placeholder='Email' />
                              <Form.Control type='text' placeholder='Password' />
                              <Button variant='primary' type='submit'>
                                  Register
                              </Button>
                              <Alert variant='danger'>
                                  <p>
                                      An error ocured
                                  </p>


                              </Alert>
                          </Stack>
                      </Col>
                  </Row>
              </Form>
          </>
  </>
  )
}

export default Login
