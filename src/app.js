import React, { useState } from 'react';
import "./sty.css"
const App = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
   
  });
  console.log(formData)
  
  const HandleInput =(e)=>{
  const{name , value} = e.target ;
    setFormData({
        [name] : value
      });
    console.log(value , name)
  }
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: 'Passwords must match' });
      return;
    }

   
    alert('Form submitted successfully!');
   
  };
     
  
return (
    <div className='form-submission'>
        <form onSubmit={handleSubmit} >
            <div className='input-field'>
                <label>Email</label>
                <input type='email' name='email' onChange={HandleInput}  value={formData.email}/>
            </div>

            <div className='input-field'>
                <label>Password</label>

                <input type='password' name='password' onChange={HandleInput}  value={formData.password}/>
            </div>

            <div className='input-field'>
                <label>confirmPassword</label>
                <input type='password' name='confirmPassword' onChange={HandleInput}  value={formData.confirmPassword}/>
               
            </div >
            {errors.password && <p className='error'>{errors.password}</p>}
                {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
            <div className='btn'>
            <button  type='submit'>Sign Up</button>
            </div>
        </form>
    </div>
)














//   const [errors, setErrors] = useState({});
//   const [submissionMessage, setSubmissionMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Simple validation
//     if (formData.password !== formData.confirmPassword ) {
//       setErrors({ confirmPassword: alert('password must be matched') });
//       return;
//     }

//     // Submit logic
//     alert('Form submitted successfully!');
//     setSubmissionMessage('Form submitted successfully!');
//   };

//   return (
//     <div>
//       <h1>Form Submission</h1>
//       {submissionMessage && <p>{submissionMessage}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//           />
//           {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
};

export default App;
