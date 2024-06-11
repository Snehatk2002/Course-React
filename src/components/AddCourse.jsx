import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddCourse = () => {
    const [data, setdata] = useState(
        {
            "coursetitle": " ",
            "description": " ",
            "coursedate": " ",
            "duration": " ",
            "venue": " ",
            "trainername": " "
        }
    )
    const inputHandler=(event)=>{
        setdata({ ...data,[event.target.name]: event.target.value})
      }
      const readValue=()=>{
          console.log(data)
          axios.post("http://localhost:8080/add",data).then(
              (response)=>{
                  console.log(response.data)
                  if (response.data.status=="success")
                   {
                      alert("SUCCESSFULLY ADDED")
                  } else {
                      alert("ERROR")
                  }
              }
          ).catch()
          
        }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">COURSE TITLE</label>
                                <input type="text" className="form-control" name='coursetitle' value={data.coursetitle} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">DESCRIPTION</label>
                                <textarea name="description" id="" cols="30" rows="10" className="form-control"value={data.description} onChange={inputHandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">COURSE DATE</label>
                                <input type="date" name="coursedate" id="" className="form-control" value={data.coursedate} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">DURATION</label>
                                <input type="text" className="form-control" name='duration' value={data.duration} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">VENUE</label>
                                <input type="text" className="form-control" name='venue' value={data.venue} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">TUTOR NAME</label>
                                <input type="text" className="form-control" name='trainername' value={data.trainername} onChange={inputHandler}/>
                            </div>
                            <center>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button class="btn btn-success" onClick={readValue}>SUBMIT</button>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCourse