import React, { useState } from 'react';
import Wrapper from '../../assets/wrappers/DashboardFormPage.js'
import { FormRow, Alert } from '../../components/';
import { useAppContext } from '../../context/AppContext';

function Profile() {

  const {
    user,
    showAlert,
    displayAlert,
    isLoading,
    updateUser
  } = useAppContext()

  const [name, setName] = useState(()=>user.name)
  const [lastName, setLastName] = useState(user.lastName)
  const [email, setEmail] = useState(user.email)
  const [location, setLocation] = useState(user.location)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit update user')
    if(!name || !email || !lastName || !location){
      displayAlert()
      return
    }
    updateUser({name,lastName,email,location})
  }


  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow type="text"
            name="name"
            value={name}
            handleChange={(event) => setName(event.target.value)}
          />
          <FormRow type="email"
            name="email"
            value={email}
            handleChange={(event) => setEmail(event.target.value)}
          />
          <FormRow type="text"
            name="lastName"
            value={lastName}
            handleChange={(event) => setLastName(event.target.value)}
          />
          <FormRow type="text"
            name="location"
            value={location}
            handleChange={(event) => setLocation(event.target.value)}
          />
          <button className="btn btn-block" 
                  disabled={isLoading}
          >
            {isLoading? 'Please wait...' : 'Save changes'}
          </button>
        </div>
      </form>

    </Wrapper>
  )
}

export default Profile
