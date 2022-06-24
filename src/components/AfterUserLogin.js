import React from 'react'
import {useNavigate} from 'react-router-dom'

const AfterUserLogin = () => {
  const Navigate = useNavigate()
  return (
    <>
    <div className="container">
        <div className="buttons">
            <button className="btn1" onClick={() => {Navigate(`/jobs/seejobs`)}} >
                See jobs
            </button>
        </div>
    </div>
    </>
  )
}

export default AfterUserLogin