import React, { useState } from 'react'
import Navbar from './Navbar'

const SearchCourse = () => {
    const [data, setdata] = useState(
        {
            "coursetitle": " "
        }
    )
    const inputHandler=(event)=>{
        setdata({ ...data,[event.target.name]: event.target.value})
      }
      const readValue=()=>{
          console.log(data)
      }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">COURSE TLTLE</label>
                            <input type="text" className="form-control" name='coursetitle' value={data.coursetitle} onChange={inputHandler}/>
                        </div>
                        <center>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button class="btn btn-success" onClick={readValue}>SEARCH</button>
                        </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchCourse