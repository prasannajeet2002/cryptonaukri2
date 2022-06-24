import axios from "axios";
import React, { useState } from "react";
import {  useParams, useNavigate } from "react-router-dom";

const ApplyForJob = () => {
  const Navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    name: "",
    email: "",
    job: "",
    skills: "",
    experience: "",
  });
  const JobApplication = () => {
    var data1 = {
        name: data.name,
        email: data.email,
        job: data.job,
        skills: data.skills,
        experience: data.experience,
    };
    var config = {
      method: "POST",
      url: "http://localhost:5001/jobs/applyforjob",
      data: data1,
    };
    axios(config);
    Navigate(`/components/AfterUserLogin`);
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
        <h1 className="new_event">Apply for a Job</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name"></label>
            <input
              required
              value={data.name}
              type="text"
              name="name"
              id="name"
              placeholder="name"
              className="form-control"
              onChange={changeData}
            />
          </div>
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
            <label htmlFor="job"></label>
            <textarea
              name="job"
              value={data.job}
              id="job"
              placeholder="job"
              className="form-control"
              onChange={changeData}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="skills"></label>
            <textarea
              name="skills"
              value={data.skills}
              id="skills"
              placeholder="skills"
              className="form-control"
              onChange={changeData}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="experience"></label>
            <textarea
              name="experience"
              value={data.experience}
              id="experience"
              placeholder="experience"
              className="form-control"
              onChange={changeData}
            ></textarea>
          </div>
          <br />
          <button type="submit" className="btn4" onClick={JobApplication}>
            apply
          </button>
        </form>
      </div>
    </>
  );
};

export default ApplyForJob;
