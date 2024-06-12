import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const SearchCourse = () => {
    const [data, setdata] = useState(
        {
            "coursetitle": " "
        }
    )
    const [result, setResult] = useState([])
    const inputHandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search",data).then(
            (response)=>{
                console.log(response.data)
                setResult(response.data)
            }
        ).catch(
            (error)=>{
                console.log("error")
            }
        ).finally()
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">COURSE TLTLE</label>
                                <input type="text" className="form-control" name='coursetitle' value={data.coursetitle} onChange={inputHandler} />
                            </div>
                            <center>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button class="btn btn-success" onClick={readValue}>SEARCH</button>
                                </div>
                            </center>
                        </div>
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">TITLE</th>
                                            <th scope="col">DESCRIPTION</th>
                                            <th scope="col">DATE</th>
                                            <th scope="col">DURATION</th>
                                            <th scope="col">VENUE</th>
                                            <th scope="col">TUTOR NAME</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {result.map(
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
        </div>
    )
}

export default SearchCourse