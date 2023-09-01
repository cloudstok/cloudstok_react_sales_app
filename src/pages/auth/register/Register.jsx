import React, { useEffect, useState } from 'react'
import '../login/login.css'
import loginLogo from '../../../assets/images/white-logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup";
import { postCaller } from '../../../services/api'
const Register = () => {
   const navigate = useNavigate()
   const [loginStatus, setLoginStatus] = useState()
   const validationLogin = Yup.object().shape({
      user_id: Yup.string()
         .required('User id is Required'),
      password: Yup.string()
         .required('Password is Required'),
   });

   const formik = useFormik({
      initialValues: {
         user_id: "",
         password: "",
         name:"",
         email:""
      },
      // validationSchema: validationLogin,
      onSubmit: async (values) => {
         console.log(values)
         //  navigate('/dashboard')
         const res = await postCaller('register', values)
         setLoginStatus(res)
         if (res.status === false) {
            alert("user not register")

         } else {
            localStorage.setItem('token', res.token)
            localStorage.setItem('user_name', res?.user.user_id)
            navigate('/dashboard')
         }
      },
   });

   useEffect(() => {
      if (localStorage.getItem('token')) {
         navigate('/dashboard')
      }
   }, [])


   return (
      <div className="login-container">
         <div className="register-container-body">
            <div className="login-logo">
               <img src={loginLogo} alt="" />
            </div>
            <div className="input-register-container">
               <label htmlFor="email">Username</label> 
               <input type="text" name="user_id" placeholder='Username' id="userid"
                    onChange={formik.handleChange}
                    value={formik.values.user_id}
                    onBlur={formik.handleBlur}
                  />
               {formik.errors.user_id && formik.touched.user_id && <span className="error" style={{ color: "red" }}>
                  {formik.errors.user_id}
               </span>}
            </div>
            <div className="input-register-container">
               <label htmlFor="email">Name</label>
               <input type="text" name="user_id" placeholder='Name' id="userid"
                    onChange={formik.handleChange}
                    value={formik.values.user_id}
                    onBlur={formik.handleBlur}
                  />
               {formik.errors.user_id && formik.touched.user_id && <span className="error" style={{ color: "red" }}>
                  {formik.errors.user_id}
               </span>}
            </div>
            <div className="input-register-container">
               <label htmlFor="email">Email</label>
               <input type="email" name="email" placeholder='email' id="userid"
                    onChange={formik.handleChange}
                    value={formik.values.user_id}
                    onBlur={formik.handleBlur}
                  />
               {formik.errors.user_id && formik.touched.user_id && <span className="error" style={{ color: "red" }}>
                  {formik.errors.user_id}
               </span>}
            </div>
           
            <div className="input-register-container">
               <label htmlFor="password">Password</label> 
               <input type="password" name="password" placeholder='Password' id="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                  />
                   {formik.errors.password && formik.touched.password && <span className="error" style={{ color: "red" }}>
              {formik.errors.password}
            </span>}
            </div>
            <div className="register-btn-container">
            <div className="space"></div>
            <div className="register-btn-body">
             
               <button type='submit' className='register-btn'>Sign up and Continue</button>
               <Link to="/login" className='sign-up'>Sign in</Link>
               {/* <Link to="/forgot_paasword" className='forgot'>Forgot Password</Link> */}
            </div>
             
            </div>
 
         </div>
      </div>
   )
}

export default Register