import React, { useEffect, useState } from 'react'
import Adminnav from './Adminnav'
import { Link } from 'react-router-dom'
import { Client, Databases, ID, Query } from 'appwrite';


function Data() {
    const [data, updateData] = useState([])
    const client = new Client();
    client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('64b92b85162ae2a4bba8');

    const database = new Databases(client);
    const promise = database.listDocuments('64b92e033b36ffa5f41d', '64be9ad43925e3bd649b');

    function getData() {
        promise.then(function (response) {
            console.log(response.documents);
            updateData(response.documents)
        }, function (error) {
            console.log(error);
        });
    }
    
    const [isLogin, updateLogin] = useState()
    useEffect(() => {
        if (sessionStorage.getItem('interacc-admin-login') == "true") {
            updateLogin(true)
        }
        getData()
    }, [])

    const deleteContactRecord = (e) =>{
        // This is id of record which is to be deleted.
        let id = e.target.id;
        const client = new Client();
    client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('64b92b85162ae2a4bba8');

    const database = new Databases(client);
    // 64c32985cdced42054f7

    const promise = database.deleteDocument('64b92e033b36ffa5f41d', '64be9ad43925e3bd649b', id);
    promise.then(function (response) { 
        console.log(response);
        window.location.reload();
     }, function (error) { 
            console.log(error);
      });

        console.log(id);
    }
    return (
        <>
            <Adminnav />
            {isLogin == true ? <div className="container my-5">
                <table className="table-fluid w-100 table-bordered fs-5">
                    <thead>

                        <tr>
                            <th className="text-center">Name</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Phone</th>
                            <th className="text-center">Message</th>
                            <th className="text-center">Subject</th>
                            <th className="text-center">Date</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element,index)=>{
                            const date = new Date(element.date)
                            console.log(date.getDate());
                            return <tr key={index}>
                                <td className="px-2">{element.fname} {element.lname} </td>
                                <td className="px-2">{element.email}</td>
                                <td className="px-2">{element.phone}</td>
                                <td className="px-2">{element.message}</td>
                                <td className="px-2">{element.subject}</td>
                                <td className="px-2">{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()} at ${date.getHours()<=9 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes()<=9 ? "0" + date.getMinutes() : date.getMinutes()}:${date.getSeconds()<=9 ? "0" + date.getSeconds() : date.getSeconds()}`}</td>
                                <td><button className="btn btn-danger my-2 d-block mx-auto" id={element.$id} onClick={deleteContactRecord}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div> : <h3 className="my-5 text-center">Login Required for Admin page <Link to="/admin-login">Go To Login</Link></h3>}
        </>
    )
}

export default Data