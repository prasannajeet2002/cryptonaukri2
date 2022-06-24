import axios from "axios";
import React, { useState } from "react";
import { useLocation, useParams, useNavigate , Link } from "react-router-dom";

const CompanyLogin = () => {
  // const Navigate = useNavigate()
  // const location = useLocation();
  // const { id } = useParams()
  const [data, setData] = useState({
    CompanyEmail: "", 
    password: "",
  });
  const LoginCompany = () => {
    var data1 = {
        CompanyEmail: data.CompanyEmail,
      password: data.password,
      //   id
    };
    var config = {
      method: "POST",
      url: "http://localhost:5001/auth/login/company",
      data: data1,
    };
    axios(config);
    //  Navigate(`/events/${id}`)
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
            <label htmlFor="CompanyEmail"></label>
            <textarea
              name="CompanyEmail"
              value={data.CompanyEmail}
              id="CompanyEmail"
              placeholder="CompanyEmail"
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
          <Link to="/components/AfterCompanyLogin">
          <button type="submit" className="btn4" onClick={LoginCompany}>
            Login
          </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default CompanyLogin;
