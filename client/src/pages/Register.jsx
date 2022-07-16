import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo, FormRow, Alert } from '../components';
import { useAppContext } from '../context/AppContext'


const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false
}

function Register() {
  const [values, setValues] = useState(initialState);
  const { name, email, password, isMember, } = values;
  const { user, isLoading,showAlert, displayAlert, clearAlert, setupUser } =  useAppContext()
  const navigate = useNavigate()


  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }
  const toogleMember = () => {
    setValues((prev) => ({ ...values, isMember: !prev.isMember }))
  }
  const onSubmit = (event) => {
    event.preventDefault()

    const currentUser = {
      name: name,
      email: email,
      password: password
    }

    if (!password || !email || (!isMember && !name)) {
      displayAlert()
      clearAlert()
      return
    }

    if (!isMember) {
      setupUser({
        currentUser,
        endPoint:'register',
        alertText:"User created! Redirect..."})
    } else {
      console.log(user)
      setupUser({
        currentUser,
        endPoint:'login',
        alertText:`Login sucessfull! Redirect...`})
    }
  }
  useEffect(() => {
    console.table('useEffect run',user)
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user])
  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {
          !isMember
          &&
          <FormRow type="name"
            name="name"
            handleChange={handleChange} />
        }
        <FormRow type="email"
          name="email"
          handleChange={handleChange} />
        <FormRow type="password"
          name="password"
          handleChange={handleChange} />
        <button className="btn btn-block" type='submit'>submit</button>
        <p>{isMember ? 'Not a member yet? ' : 'Already a member? '}
          <button type="button"
            className="member-btn"
            onClick={toogleMember}
            disabled ={isLoading}>
            {!isMember ? "login" : "Register"}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register;