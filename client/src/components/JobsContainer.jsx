import React from 'react';
import {useAppContext} from '../context/AppContext';
import Loading from './Loading';
import Wrapper from '../assets/wrappers/JobsContainer';


function JobsContainer() {
  const {
    isLoading,
    getJobs, 
    jobs, 
    numOfPages, 
    totalJobs
  } = useAppContext()

  // useEffect(()=>{
  //   getJobs()
  // },[])

  return (
    <>
      {isLoading && <Loading center/>}

    <Wrapper>
     
    </Wrapper>


  
    
    </>
  )
}

export default JobsContainer
