import React from "react";

const Applicant = ({applicant}) => {
  return (
    <>
      <div className="applicant-container">
        <div className="name-email">
          <div className="name">Name : {applicant.name}</div>
          <div className="email">Email :{applicant.email}</div>
        </div>
        <div className="job-profile">
          <div className="jobapplied">Job Applied For : {applicant.job}</div>
          <div className="skills">Skills :{applicant.skills} </div>
          <div className="experience">Experience : {applicant.experience}</div>
        </div>
      </div>
    </>
  );
};

export default Applicant;
