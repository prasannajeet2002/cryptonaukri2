import React from "react";
import { useEffect, useState } from "react";
import Applicant from "./Applicant";
import axios from "axios";

const ChekcAllApplicants = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    var config = {
      method: "get",
      url: "http://localhost:5001/jobs/seeapplicants",
      // data: data
    }; 
    axios(config).then(function(response) {
      console.log(response.data);
      setApplicants(response.data);
    });
  }, []);
  return (
    <>
      <div className="user_container">
        {applicants.map((applicant) => (
          <Applicant applicant={applicant} />
        ))}
      </div>
    </>
  );
}

export default ChekcAllApplicants;
