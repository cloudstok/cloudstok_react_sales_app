import React, { useEffect, useState } from 'react'
import '../login/login.css'
import loginLogo from '../../../assets/images/white-logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup";
import { postCaller } from '../../../services/api'
const Register = () => {
   const navigate = useNavigate()
   const {state} = useLocation()
   const routeData = state?.productData??{}
   console.log(routeData)
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
         console.log(values)
   
         const res  = await postCaller('register',values)
         if(res.status===true){
            alert("Register Successful")
            navigate('/login',{
               state:{
                  newData:routeData
               }
            })
         }
         else{
            alert(res.msg)
         }
         // const res = await postCaller('login', values)
         // setLoginStatus(res)
         // if (res.status === false) {
         //    alert("user not register")

         // } else {
         //    localStorage.setItem('token', res.token)
         //    localStorage.setItem('user_name', res?.user.user_id)
         //    navigate('/platformConfiguration')
         // }
      },
   });

   // useEffect(() => {
   //    if (localStorage.getItem('token')) {
   //       navigate('/')
   //    }
   // }, [])


   return (
      <div className="login-container">
         <div className="login-container-body">
            <div className="login-logo">
               <img src={loginLogo} alt="" />
            </div>
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
               <button type='submit'>Sign Up and Continue</button>
            </div>
            <div className="login-para-container-1">
               <p style={{cursor:"pointer", color:"#006cff"}} onClick={()=> navigate('/login',{
               state:{
                  newData:routeData
               }
            })}  className='sign-up-reg'>Already have an account? Sign In</p>
              
            </div>
           
            </form>
         </div>
      </div>
   )
}

export default Register