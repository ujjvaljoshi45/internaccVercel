import React, { useEffect, useState } from 'react'
import Card from './Card'
import Header from './Header'


function Course(props) {
  const [subject, updateSubjects] = useState([])
  const [university, updateUniversity] = useState([])
  const [courses, updateCourses] = useState([])
  const { course } = props
  console.log(course);

  useEffect(() => {

    let tempSubjList = []
    let tempUnivList = []
    course.forEach(element => {
      tempSubjList.push(element.subject)
      tempUnivList.push(element.university)
    });
    console.log(tempSubjList);
    console.log(tempUnivList);

    function removeDuplicates(tempSubjList) {
      return [...new Set(tempSubjList)];
    }
    let filteredSubjList = removeDuplicates(tempSubjList)
    let filteredUnivList = removeDuplicates(tempUnivList)

    updateSubjects(filteredSubjList)
    updateUniversity(filteredUnivList)
    updateCourses(course)
  }, [course])

  const applyFilters = (e) => {
    let filteredCourses = []
    let selectedSubject = document.getElementById("subject").value
    let selectedAge = document.getElementById("age").value
    let selectedUniversity = document.getElementById("university").value
    course.map((element) => {


      if ((selectedSubject != "all" ? element.subject == selectedSubject : true) && (selectedAge != "all" ? ((selectedAge >= element.minAge) && (selectedAge <= element.maxAge)) : true) && (selectedUniversity != "all" ? element.university == selectedUniversity : true)) {
        filteredCourses.push(element)
      }
    })
    updateCourses(filteredCourses)
  }
  return (
    <>
      <Header />
      <h1 className="text-start ms-2 mt-4" style={{ fontSize: "2.5rem", fontWeight: 700, fontFamily: "constantia" }} data-aos="fade-right">Explore Course</h1>

      <div className="container-fluid bg-secondary mt-4" data-aos="fade-up" style={{maxWidth:"99vw"}}>

      </div>
      <div className="container-fluid px-md-5 px-0 mt-3 mb-4">
        <h1 className=" ps-2 text-start" style={{ fontSize: "27px", fontWeight: "700" }}>Filters :</h1>

        <div className="container-fluid ">
          <div className="row">
            <div className=" col-4">
              <div className="form-group ">
                <label htmlFor="" className="form-label">Subject : </label>
                <select name="" id="subject" className="form-select" onChange={applyFilters}>
                  <option value={"all"}>{"All"}</option>
                  {
                    subject.map((element, index) => {
                      return <option value={element} key={index}>{element.charAt(0).toUpperCase() + element.slice(1)}</option>
                    })
                  }

                  {/* <option value="">Busines and Enterpreneurship</option>
                  <option value="">Computer Science</option>
                  <option value="">More</option> */}
                </select>
              </div>
            </div>
            <div className=" col-4">
              <div className="form-group ">
                <label htmlFor="" className="form-label">Age : </label>
                <select name="age" id="age" className="form-select" onChange={applyFilters}>
                  <option value={"all"}>{"All"}</option>
                  {[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map((element,index)=>{
                    return <option key={index} value={element}>{element}</option>
                  })}
                </select>
              </div>
            </div>
            <div className=" col-4">
              <div className="form-group ">
                <label htmlFor="" className="form-label">University : </label>
                <select name="" id="university" className="form-select" onChange={applyFilters}>
                  <option value={"all"}>{"All"}</option>
                  {
                    university.map((element, index) => {
                      return <option value={element} key={index}>{element.charAt(0).toUpperCase() + element.slice(1)}</option>
                    })
                  }
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-0 row-cols-xl-3 row-cols-lg-2 pt-4 row-cols-1 mt-2 ">
          {courses.map((element, index) => {
            return <div className="col" key={index} style={{maxWidth:"100"}}>
              <Card img={element.image} title={element.name} description={element.description} id={element.$id} image={element.image} />
            </div>
          })}
        </div>
      </div>



    </>
  )
}

export default Course