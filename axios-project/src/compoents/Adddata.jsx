import React, { useEffect, useState } from 'react';
import axios from "axios";

const Adddata = () => {
  const [state, setState] = useState({
    name: "",
    company: ""

  })
  const Add = () => {
    axios.post("https://cryptic-everglades-50429.herokuapp.com/addData", state).then(data => {
      console.log(data["data"])
      console.log(state)
    }).catch(err => {
      console.log(err)
    })
  }
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  return <div>
    <h1>Digikull Students</h1>
    <h2>hello user!!</h2>
    <div className='container'>

      <input type="text" name="name" placeholder='enter name' onChange={handleChange} />
      <input type="text" name="company" placeholder='company name' onChange={handleChange} />
      <div><button onClick={Add}>Add User</button>
      </div>


    </div>
  </div>;
};

export default Adddata;