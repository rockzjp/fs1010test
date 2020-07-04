import React from 'react';
import './Login.scss';
import InputField from './inputField';

function Login() {
  const inputRefs = React.useRef(
   [React.createRef(), React.createRef()]
  );

  const [data, setData] = React.useState({});

  const handleChange = (name, value) =>{
     setData(prev => ({...prev, [name]: value}))
  }


  const submitForm = (e) => {
       e.preventDefault();


       let isValid = true;

       for (let i=0; i<inputRefs.current.length; i++){
         const valid = inputRefs.current[i].current.validate()
         if(!valid){
           isValid = false
           
         }
       }
       if(!isValid){
         return
       }
  }
  return (
    
    <div className="logintype">
      <form onSubmit={submitForm} className="form">
         <InputField 
           ref = {inputRefs.current[0]}
           name="email"
           label="Email* :"
           onChange={handleChange}
           validation={"required|min:6|max:15"}
         />


          <InputField 
          ref = {inputRefs.current[1]}
           name="password"
           label="Password*  :"
           onChange={handleChange}
           validation={"required"}
         /> 

         <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
