import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Indexpage  from './components/Indexpage';
import UserRegister from './components/UserRegister';
import UserLogin from './components/UserLogin';
import CompanySignup from './components/CompanySignup';
import CompanyLogin from './components/CompanyLogin';
import AfterCompanyLogin from './components/AfterCompanyLogin';
import AfterUserLogin from './components/AfterUserLogin';
import PostJob from './components/PostJob'
import ApplyForJob from './components/ApplyForJob';
import CheckAllApplicants from './components/CheckAllApplicants';
import SeeAllJobs from './components/SeeAllJobs';

function App() {

  
  return (
    <>
     <Router>
        <Routes>
          <Route path="/" exact element={<Indexpage />} />
          <Route path="/auth/user" exact element={<UserRegister />} />
          <Route path="/auth/login/user" exact element={<UserLogin />} />
          <Route path="/auth/company" exact element={<CompanySignup />} />
          <Route path="/auth/login/company" exact element={<CompanyLogin />} />
          <Route path="/components/AfterCompanyLogin" element={<AfterCompanyLogin />} />
          <Route path="/components/AfterUserlogin" element={<AfterUserLogin />} />
          <Route path="/postjob" element={<PostJob />} />
          <Route path="/jobs/applyforjob" exact element={<ApplyForJob />} />
          <Route path="/jobs/seeapplicants" exact element={<CheckAllApplicants />} />
          <Route path="/jobs/seejobs" exact element={<SeeAllJobs />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
