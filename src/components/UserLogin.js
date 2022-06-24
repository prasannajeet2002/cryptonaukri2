import axios from "axios";
import React, { useState } from "react";
import { useLocation, useParams, useNavigate , Link } from "react-router-dom";

const UserLogin = () => {
  const Navigate = useNavigate()
  // const location = useLocation();
  // const { id } = useParams()
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const LoginUser = () => {
    var data1 = {
      email: data.email,
      password: data.password,
      //   id
    };
    var config = {
      method: "POST",
      url: "http://localhost:5001/auth/login/user",
      data: data1,
    };
    axios(config)
      Navigate(`/components/AfterUserlogin`)
    
     
  };
  const changeData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="form_container">
        <h1 className="new_event">Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email"></label>
            <textarea
              name="email"
              value={data.email}
              id="email"
              placeholder="email"
              className="form-control"
              onChange={changeData}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <textarea
              name="password"
              value={data.password}
              id="password"
              placeholder="password"
              className="form-control"
              onChange={changeData}
            ></textarea>
          </div>
          <br />
          <Link to="/components/AfterUserLogin">
          <button type="submit" className="btn4" onClick={LoginUser}>
            Login
          </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default UserLogin;
