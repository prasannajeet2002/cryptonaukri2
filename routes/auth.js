const express = require("express");
const User = require("../models/users");
const Company = require("../models/companies");
let alert = require("alert");

const router = express.Router();

// post an user ( user registration)
router.post("/user", async (req, res) => {
  try {
    const password = req.body.password;
    const Cpassword = req.body.confirmpassword;
    if (password === Cpassword) {
      const registerUser = new User({
        Username: req.body.Username,
        email: req.body.email,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
      });
      //    console.log(req.body)
      const Registered = await registerUser.save();
      res.status(201).send("user registered successfully");
    } else {
      res.send("passwords are not matching");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
// user login (post)
router.post("/login/user", async (req, res) => {
  try {
    // const email = req.body.email;
    // const password = req.body.password;
    // const useremail = await User.findOne({ email})
    // const userpassword = await User.findOne({ password })
    // if(useremail.password === password) {
    //   res.status(201).console.log("login successful")
    //   res.redirect('/components/AfterUserlogin')
    // }
    // else{
    //     res.send("invalid credentials");
    //     alert("invalid credentials")
    // }
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      if (user.password === password) {
        res.send({message: 'login successful',user:user});
      }
      else{
        res.send({message: 'invalid credentials'})
      }
      // res.redirect('/components/AfterUserLogin')
    } else {
      res.send({message: " login failed"})
      // res.redirect('/')
    }
  } catch (error) {
    res.status(400).send("invalid login");
  }
});

// post a comapny ( company registration)
router.post("/company", async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.confirmpassword;
    if (password === cpassword) {
      const registerCompany = new Company({
        CompanyName: req.body.CompanyName,
        CompanyEmail: req.body.CompanyEmail,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
      });

      const Registered = await registerCompany.save();
      res.status(201).send("company registered successfully");
    } else {
      res.send("passwords are not matching");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
// company login(post)
router.post("/login/company", async (req, res) => {
  try {
    const CompanyEmail = req.body.CompanyEmail;
    const password = req.body.password;
    const companyemail = await Company.findOne({ CompanyEmail: CompanyEmail });
    // const companypassword = await User.findOne({ password })
    // res.send({useremail , userpassword})
    // console.log(userpassword)
    // console.log(useremail)
    if (companyemail.password === password) {
      res.status(201).send("login successful");
    } else {
      res.send("invalid credentials");
    }
  } catch (error) {
    res.status(400).send("invalid login");
  }
});

module.exports = router;
