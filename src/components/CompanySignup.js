import axios from 'axios';
import React, { useState } from 'react'
import {useLocation , useParams , useNavigate} from 'react-router-dom'


const CompanyRegister=()=> {
    const Navigate = useNavigate()
    // const location = useLocation();
    // const { id } = useParams()
    const [data, setData] = useState({
        CompanyName: "", CompanyEmail: "",password: "",confirmpassword: ""
    });
    const RegisterCompany = () => {
     var data1 ={
        CompanyName: data.CompanyName,
        CompanyEmail: data.CompanyEmail,
      password: data.password,
      confirmpassword: data.confirmpassword,
    //   id
     }
     var config = {
         method : "POST",
         url : "http://localhost:5001/auth/company",
         data : data1
     }
     axios(config)
     Navigate(`/auth/login/company`)
    
    }
    const changeData = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setData(data => ({
            ...data,
            [name]: value
        }));
    }
  return (
    <>
     <div className="form_container">
        <h1 className="new_event">Register</h1>
        <form >
            <div className="form-group">
                <label htmlFor="CompanyName"></label>
                <input required value={data.CompanyName} type="text" name="CompanyName" id="CompanyName" placeholder="CompanyName" className="form-control" onChange={changeData}/>
            </div>
            <div className="form-group">
                <label htmlFor="CompanyEmail"></label>
               <textarea  name="CompanyEmail" value={data.CompanyEmail} id="CompanyEmail" placeholder="CompanyEmail" className="form-control" onChange={changeData}></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="password"></label>
               <textarea name="password" value={data.password} id="password" placeholder="password" className="form-control" onChange={changeData}></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="confirmpassword"></label>
               <textarea name="confirmpassword" value={data.confirmpassword} id="confirmpassword" placeholder="confirmpassword" className="form-control" onChange={changeData}></textarea>
            </div>
            <br/>
             <button type="submit" className="btn4" onClick={RegisterCompany}>Register</button>
             <div className="login">
                already registered?
                <br />
                <button className="login-btn" onClick={()=>{Navigate(`/auth/login/company`)}}>login</button>
             </div>
        </form>
      
    </div>
    </>
  )
  }


  export default  CompanyRegister