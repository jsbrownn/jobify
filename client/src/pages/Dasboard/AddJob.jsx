import React,{useEffect} from 'react';
import { FormRow,FormRowSelect, Alert } from '../../components';
import { useAppContext } from '../../context/AppContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

function AddJob() {
  const {
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status, 
    statusOptions,
    isEditing,
    isLoading,
    handleChange,
    clearValues,
    createJob,
    getJobs
  } = useAppContext()

  const handleSubmit = (event) => {
    event.preventDefault();
    // if(!position || !company || !jobLocation ){
    //   displayAlert()
    //   return
    // }
    if(isEditing){
      //to do: edit job
      return
    }
    createJob()
    console.log('create job')
  }

  const handleInputChange = (event) =>{
    handleChange({name:event.target.name,value:event.target.value})
  }

  useEffect(() => {
    getJobs()
  },[])

  return (
    <Wrapper>
      {showAlert && <Alert/>}
      <form className="form">
        <h3>{isEditing ? 'Edit job' : 'Add a job'}</h3>
        <div className="form-center">
          <FormRow  type="text" 
                    name="company"
                    value = {company}
                    handleChange={handleInputChange} />
          <FormRow  type="text" 
                    name="position"
                    value = {position}
                    handleChange={handleInputChange}/>
          <FormRow  type="text" 
                    name="jobLocation"
                    labelText="job location"
                    value = {jobLocation}
                    handleChange={handleInputChange}/>
          <FormRowSelect  name="jobType" 
                          labelText="job type"
                          value={jobType}
                          options ={jobTypeOptions}
                          handleChange={handleInputChange}/>
          <FormRowSelect  name="status" 
                          labelText="status"
                          value={status}
                          options ={statusOptions}
                          handleChange={handleInputChange}/>
          <div className="button-container">
            <button className="btn btn-block submit-btn"
                    type = "submit"
                    onClick = {handleSubmit}
                    disabled = {isLoading}>
                    submit
            </button>
            <button className="btn btn-block clear-btn"
                    onClick = {(event)=>{
                      event.preventDefault();
                      clearValues()
                    }}
                    disabled = {isLoading}>
                    clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob;