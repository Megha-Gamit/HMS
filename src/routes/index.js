const express = require("express");
const router = express.Router();
const studentModel = require("../modules/student");


router.get("/signup",(req,res)=>{

    res.render("signup", { title: "Hostel Management System", msg: "" });

});

router.post("/signup",(req,res)=>{

    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const mother_name = req.body.mother_name;
    const father_name = req.body.father_name;
    const state = req.body.state;
    const city = req.body.city;
    const enrollment_no = req.body.enrollment_no;
    const gender = req.body.gender;
    const dob = req.body.dob;
    const s_contact = req.body.s_contact;
    const parent_contact = req.body.parent_contact;
    const course = req.body.course;
    const email = req.body.email;
    const password = req.body.password;
   // const confpassword = req.body.confpassword;

   const student_details = new studentModel({
    first_name:first_name,
    last_name:last_name,
    mother_name:mother_name,
    father_name:father_name,
    state:state,
    city:city,
   
    enrollment_no:enrollment_no,
    gender:gender,
    dob:dob,
    s_contact:s_contact,
    parent_contact:parent_contact,
    course:course,
    email:email,
    password:password
    
    
    });

    student_details.save((err,doc)=>{
        if(err) throw err;
        
        res.render("signup", { title: "Hostel Management System", msg: "Student Registerd Successfully" });
    })


})



module.exports = router;

