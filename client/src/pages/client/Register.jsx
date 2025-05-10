import React from "react";

// create form using multi method to register

// check if user id not in database then create new once

export default function Register() {

    const LoginStyle = {
        
    };

    return (
        <>
            <div className="login-form-container">
                
                <form action="" method="post">
                    <label htmlFor="fullname">Full name</label>
                    <input type="text" name="fullname" id="fullname" placeholder="Enter your full name" required/>

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" required/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" required/>

                    <button type="submit">Sign up</button>
                    <button type="button">Login</button>

                </form>

            </div>
        </>
    );
}