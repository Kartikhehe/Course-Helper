// import { useState } from 'react';

// const courses = [
//     {   id:1,
//         CourseName: "Dynamics",
//         CourseCode: "ME209",
//         Credits: "9",
//         Description: "This is course in 3rd Semester for ME Dept. Students",
//         ImageURL:"../images/me209.png"

//     },{   id:2,
//         CourseName: "Classical Dynamics",
//         CourseCode: "PHY112",
//         Credits: "11",
//         Description:"This is a first year course which has basic Mechanics similar to JEE",
//         ImageURL:"../images/phy112.png"

//     },{   id:3,
//         CourseName: "Critical thinking",
//         CourseCode: "PHI147",
//         Credits: "11",
//         Description:"This course is all about types of thinking. This is a HSS level-1 course",
//         ImageURL:"../images/phi147.png"

//     },{   id:4,
//         CourseName:" Machine Learning",
//         CourseCode: "CS771",
//         Credits: "9",
//         Description:"This is for ML enthusiasts. There is no preReq for the course",
//         ImageURL:"../images/cs771.png"

//     },{   id:5,
//         CourseName: "Psychology",
//         CourseCode: "PSY151",
//         Credits: "11",
//         Description:"This is also an HSS level-1 course.",
//         ImageURL:"../images/psy151.png"

//     },
// ]

import pkg from 'pg';
const { Client } = pkg;
const client = new Client({
    host: "2-ftl.h.filess.io",
    user: "courses_pondfuture",
    port: 5433,
    password: "a74dafc3e8fde1f33c6a9e06b2a10a3ff114542c",
    database: "courses_pondfuture",
})

client.connect();

client.query('Select * FROM myschema.courses', (err,res)=>{
    if(!err){
        const courses = res.rows;
    }else{
        console.log(err.message);
    }
    client.end;
})

export default courses;
 