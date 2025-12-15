import React, { useState } from 'react'
import axios from 'axios';
const Feedback = () => {
   const[user,setUser]=useState({
      fullname:"",
      email:"",
      comment:""
    })
    const{fullname,email,comment}=user;
    const changeHandler=e=>{
      setUser({...user,[e.target.name]:e.target.value});
    }
    const submitHandler = e=>{
      e.preventDefault();
      if (!email || email.trim() === "") {
      alert("Email cannot be empty");
      return;
    }

    if (!email.endsWith("@gmail.com")) {
      alert("Please enter a valid Gmail address");
      return;
    }
    if(!fullname || fullname.trim()===""){
      alert("Please enter your valid fullname:");
      return;
    }
    if(!comment || comment.trim()===""){
      alert("Could You Give me a Feedback !!!");
      return;
    }
      axios.post('https://myportfolio-b0313-default-rtdb.firebaseio.com/feedback.json',user).then(()=>{
        alert("Feedback Submitted!!!");
        setUser({
        fullname:"",
        email:"",
        comment:""
      })
      }).catch((error)=>{
        console.log(error);
        alert("Error in Submitting Feedback");
      }) 
  }
  return (
    <form autoComplete='off' onSubmit={submitHandler}>
        <div className='card'>
        <h1 className="head">Feedback form</h1>
        <div className="cards">
        <input type="text" name='email' value={email} onChange={changeHandler} placeholder='Email :'/>
        </div>
        <div className="cards">
        <input type="text" name='fullname' value={fullname} onChange={changeHandler} placeholder='Full Name :'/>
        </div>
        <div className="cards">
        <input type='text' name="comment"  value={comment} placeholder='Leave a Feedback' onChange={changeHandler}/>
        </div>
        <div  className='btns'>
        <button name='submit'>Submit</button>
        </div>
    </div>
      </form>
  )
}

export default Feedback
