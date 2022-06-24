import React from 'react'
import {useNavigate} from 'react-router-dom'

const Indexpage = () => {
    const navigate = useNavigate()
  return (
    <>
    <div className="container">
        <div className="buttons">
            <button className="btn1" onClick={() => {navigate(`/auth/company`)}}>
                for companies
            </button>
            <button className="btn2" onClick={() => {navigate(`/auth/user`)}}>
                for applicants
            </button>
        </div>
    </div>
    </>
  )
}

export default Indexpage