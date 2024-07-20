import React, { useState } from 'react'
import axios from 'axios';
import { Button, FormControl, Input, Label, LoginTitle, LoginWrapper } from '../style/LoginStyles';

const Login = ({ userAuthantication }) => {
  const [userCred, setUserCred] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCred({
      ...userCred,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3000/api/login', userCred)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        userAuthantication(true)
      })
      .catch(error => {
        console.error('Something wrong!', error);
      });
  }

  return (
    <LoginWrapper onSubmit={handleSubmit}>
      <LoginTitle>Login</LoginTitle>
      <FormControl>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          name="username"
          value={userCred.username}
          onChange={handleChange}
          placeholder="Username"
        />
      </FormControl>
      <FormControl>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          value={userCred.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </FormControl>
      <Button type='submit'>Login</Button>
    </LoginWrapper>
  )
}

export default Login
