import React from "react";
import { useNavigate, useResolvedPath } from "react-router-dom";

const Job = ({ job }) => {
  const Navigate = useNavigate();

  console.log(job);

  return (
    <>
      <div className="jobs">
        <div className="job">Job : {job.job}</div>
        <div className="eligibility">Eligibility :{job.eligibility}</div>
        <div className="requirements">Requirements : {job.requirement}</div>
        <div className="responsibilites">Responsibilities :{job.responsibilities} </div>
          <button type="submit" className="btn4" onClick={()=>{Navigate(`/jobs/applyforjob`)}}>
            APPLY
          </button>
      </div>
    </>
  );
};

export default Job;
