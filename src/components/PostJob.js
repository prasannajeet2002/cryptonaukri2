import axios from "axios";
import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

const PostJob = () => {
  const Navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    job: "",
    eligibility: "",
    requirement: "",
    responsibilities: "",
  });
  const CreateJob = () => {
    var data1 = {
      job: data.job,
      eligibility: data.eligibility,
      requirement: data.requirement,
      responsibilities: data.responsibilities,
      id,
    };
    var config = {
      method: "POST",
      url: "http://localhost:5001/jobs/createjob",
      data: data1,
    };
    axios(config);
    Navigate(`/components/AfterCompanyLogin`);
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
        <h1 className="new_event">post a job</h1>
        <form>
          <div className="form-group">
            <label htmlFor="job"></label>
            <input
              required
              value={data.job}
              type="text"
              name="job"
              id="job"
              placeholder="job"
              className="form-control"
              onChange={changeData}
            />
          </div>
          <div className="form-group">
            <label htmlFor="eligibility"></label>
            <textarea
              name="eligibility"
              value={data.eligibility}
              id="eligibility"
              placeholder="eligibility"
              className="form-control"
              onChange={changeData}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="requirement"></label>
            <textarea
              name="requirement"
              value={data.requirement}
              id="requirement"
              placeholder="requirement"
              className="form-control"
              onChange={changeData}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="responsibilities"></label>
            <textarea
              name="responsibilities"
              value={data.responsibilities}
              id="responsibilities"
              placeholder="responsibilities"
              className="form-control"
              onChange={changeData}
            ></textarea>
          </div>
          <br />
          <button type="submit" className="btn4" onClick={CreateJob}>
            Create Job
          </button>
        </form>
      </div>
    </>
  );
};

export default PostJob;
