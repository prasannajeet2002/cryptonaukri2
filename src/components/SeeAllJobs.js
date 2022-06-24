import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Job from './Job'

const SeeAllJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    var config = {
      method: "get",
      url: "http://localhost:5001/jobs/seejobs",
    };
    axios(config).then(function (response) {
      console.log(response.data);
      setJobs(response.data);
      // console.log(d); 
    });
  }, []);

  return(
  <>
   <div className="user_container">
        {jobs.map((job) => (
          <Job job={job} />
        ))}
      </div>
  </>
  );
};

export default SeeAllJobs;
