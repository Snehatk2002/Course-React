import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

const ViewCourse = () => {
    const [data, changedata] = useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8080/view").then(
            (response)=>{
                console.log(response.data)
                changedata(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)
            }
        ).finally()

    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <table class="table">
                                    <thead>
                                      <tr>
                                        <th scope="col">COURSE TITLE</th>
                                        <th scope="col">DESCRIPTION</th>
                                        <th scope="col">COURSE DATE</th>
                                        <th scope="col">DURATION</th>
                                        <th scope="col">VENUE</th>
                                        <th scope="col">TRAINER NAME</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                    {data.map(
                                (value,index)=>{
                                    return  <tr>
                                    <th scope="row">{value.coursetitle}</th>
                                    <td>{value.description}</td>
                                    <td>{value.coursedate}</td>
                                    <td>{value.duration}</td>
                                    <td>{value.venue}</td>
                                    <td>{value.trainername}</td>
                                  </tr>
                                }
                                    )}
                                      
                                    </tbody>
                                  </table>
                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCourse