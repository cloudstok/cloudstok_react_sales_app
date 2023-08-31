import React from 'react'
import './register.css'

const Register = () => {
    return (
        <form className='form'>
            <div class="container">
                <h2>REGISTER</h2>
                <p>Kindly fill in this form to register.</p>
                
                <label for="username"><b>Username</b></label>
                <input type="text" placeholder="Enter username" name="username" id="username" required />

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required />

                <label for="pwd"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="pwd" id="pwd" required />

                <label for="pwd-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="pwd-repeat" id="pwd-repeat" required />

                <button type="submit">Register</button>
            </div>

            <div>
                <p>Already have an account? <a href="#">Log in</a>.</p>
            </div>
        </form>
    )
}

export default Register
