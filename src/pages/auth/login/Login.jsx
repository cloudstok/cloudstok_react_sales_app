import React, { useEffect, useState } from 'react'
import './login.css'
import loginLogo from '../../../assets/images/white-logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup";
import { postCaller } from '../../../services/api'
const Login = () => {
   const {state} = useLocation()
   const loginData = state?.newData??{}
   console.log(loginData)
   const navigate = useNavigate()
   
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
      },
      // validationSchema: validationLogin,
      onSubmit: async (values) => {     
         const res = await postCaller('login', values)
         if (res.status === true) {
            localStorage.setItem('token', res.token)
            alert(res.msg)
            const resp  = await postCaller('createOrder',loginData)
            if(resp.status===true){
               navigate('/payment',{
                  state:{
                     paymentData:loginData
                  }
               })
            }
            else{
               alert(resp.msg)
            }
           
         } else {
            alert(res.msg)
         }
      },
   });
   useEffect(() => {
      if (localStorage.getItem('token')) {
        navigate('/profile')
      }
    }, [])
   


   return (
      <div className="login-container">
         <div className="login-container-body">
            <div className="login-logo">
               <img src={loginLogo} alt="" />
            </div>
            {/* <p>Sign In </p> */}
            <form onSubmit={formik.handleSubmit}>
            <div className="input-container">
               <label htmlFor="username">Username</label> <br />
               <input type="text" name="user_id" placeholder='Username' id="userid"
                    onChange={formik.handleChange}
                    value={formik.values.user_id}
                    onBlur={formik.handleBlur}
                  />
               {formik.errors.user_id && formik.touched.user_id && <span className="error" style={{ color: "red" }}>
                  {formik.errors.user_id}
               </span>}
            </div>
            <div className="input-container">
               <label htmlFor="password">Password</label> <br />
               <input type="password" name="password" placeholder='Password' id="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                  />
                   {formik.errors.password && formik.touched.password && <span className="error" style={{ color: "red" }}>
              {formik.errors.password}
            </span>}
            </div>
            <div className="login-btn">
               <button type='submit'>Sign in and Continue</button>
            </div>
            <div className="login-para-container">
               <p onClick={()=> navigate('/register',{
               state:{
                  newData:loginData
               }
            })} className='sign-up'>Sign up</p>
               <Link to="/forgot_paasword" className='forgot'>Forgot Password</Link>
            </div>
            </form>
         </div>
      </div>
   )
}

export default Login