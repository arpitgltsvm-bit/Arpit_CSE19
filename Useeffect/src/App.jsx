import React,{useState,useEffect} from 'react'





const App = () => {
  const[formData,setformData]=useState({
    name:"",
    email:"",
    password:""
  })

  useEffect(()=>{
 console.log("form data update",formData);
  },[formData])

  const handleChange=(e)=>{
   setformData({
    ...formData,
    [e.target.name]:e.target.value,
   })
  }

const handleSubmit=()=>{
   e.preventDefault();
   alert("registration successful");
}


  return (
    <div>
      <form action="">
        <input type ="text"
        name = "name"
        placeholder='Enter your name'
          />
        <br/>  
        <br/>
        <input type="email"
        name='email'
        placeholder="Enter yout email"
          />
          <br/>
          <br/>
        <input type='password'
        name='password'
        placeholder='Enter your password'
        />  
        <br/>
        <button type='submit'>Registration</button>

      </form>
    </div>
  )
}

export default App