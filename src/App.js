import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Course from './components/Course';
import Data from './components/Data';
import Blog from './components/Blog';
import Accomodation from './components/Accomodation'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Readblog from './components/Readblog';

import { Client, Databases, ID, Query } from 'appwrite';
import Adminaccomodation from './components/Adminaccomodation';
import Admincourse from './components/Admincourse';
import Adminblog from './components/Adminblog';
import AdminLogin from './components/AdminLogin';
import Searchresult from './components/Searchresult';

const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('64b92b85162ae2a4bba8');

const database = new Databases(client);
const promise = database.listDocuments('64b92e033b36ffa5f41d', '64b92e0896b7047d3196');

            /*
            Course Updated Schema
            name
            university
            subject
            description
            image
            minAge
            maxAge
            */

function App() {
  const [course, updateCourse] = useState([])
  const [blogs, updateBlogs] = useState([])
  const [searchedCourse, updateSearchedCourse] = useState([])
  function getData() {
    promise.then(function (response) {
      // console.log(response.documents);
      updateCourse(response.documents)
    }, function (error) {
      console.log(error);
    });
  }
  function getBlogs() {
    const client = new Client();
    client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('64b92b85162ae2a4bba8');

    const database = new Databases(client);

    const promise = database.listDocuments('64b92e033b36ffa5f41d', '64b92e39d4da1ba6d01a');
    promise.then(function (response) {
      // console.log(response.documents);
      updateBlogs(response.documents)
    }, function (error) {
      console.log(error);
    });
  }
  useEffect(() => {
    getData();
    getBlogs();
  },[])

  const updateSearch = (array) =>{
    updateSearchedCourse(array)
  }
  return (
    <>
      <Router>

        <Routes>
          <Route exact path="/" element={<Home updateSearch={updateSearch} />}></Route>
          <Route exact path="/blog" element={<Blog blogs={blogs} />}></Route>
          <Route exact path="/read/:title" element={<Readblog course={course} blogs={blogs} />}></Route>
          <Route exact path="/searchresult" element={<Searchresult course={searchedCourse}  />}></Route>
          <Route exact path="/course" element={<Course course={course}  />}></Route>
          <Route exact path="/accomodation" element={<Accomodation />}></Route>
          <Route exact path="/about" element={<Aboutus />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/admin-login" element={<AdminLogin />}></Route>
          {/* <Route exact path="/admin-accomodation" element={<Adminaccomodation />}></Route> */}
          <Route exact path="/admin-course" element={<Admincourse course={course} />}></Route>
          <Route exact path="/admin-blog" element={<Adminblog blog={blogs} />}></Route>
          <Route exact path="/admin-data" element={<Data />}></Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}


export default App;
