import axios from 'axios';
import React, { useState } from 'react'
import {useLocation , useParams , useNavigate} from 'react-router-dom'


const UserRegister=()=> {
    const Navigate = useNavigate()
    // const location = useLocation();
    // const { id } = useParams()
    const [data, setData] = useState({
        Username: "", email: "",password: "",confirmpassword: ""
    });
    const RegisterUser = () => {
     var data1 ={
      Username: data.Username,
      email: data.email,
      password: data.password,
      confirmpassword: data.confirmpassword,
    //   id
     }
     var config = {
         method : "POST",
         url : "http://localhost:5001/auth/user",
         data : data1
     }
     axios(config)
     Navigate(`/auth/login/user`)
    
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
                <label htmlFor="Username"></label>
                <input required value={data.Username} type="text" name="Username" id="Username" placeholder="Username" className="form-control" onChange={changeData}/>
            </div>
            <div className="form-group">
                <label htmlFor="email"></label>
               <textarea  name="email" value={data.email} id="email" placeholder="email" className="form-control" onChange={changeData}></textarea>
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
             <button type="submit" className="btn4" onClick={RegisterUser}>Register</button>
             <div className="login">
                already registered?
                <br />
                <button className="login-btn" onClick={()=>{Navigate(`/auth/login/user`)}}>login</button>
             </div>
        </form>
      
    </div>
    </>
  )
  }


  export default  UserRegister