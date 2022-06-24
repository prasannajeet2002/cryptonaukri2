import React from 'react'
import {useNavigate} from 'react-router-dom'

const AfterCompanyLogin = () => {
    const Navigate = useNavigate()
  return (
    <>
    <div className="container">
        <div className="buttons">
            <button className="btn1" onClick={() => {Navigate(`/jobs/seeapplicants`)}}>
                Check Applicants
            </button>
            <button className="btn2" onClick={()=>{Navigate(`/postjob`)}} >
                Post a Job
            </button>
        </div>
    </div> 
    </>
  )
}

export default AfterCompanyLogin