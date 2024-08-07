import React, { useState } from 'react';

const LoginForm = props => {
        const [firstname, setFirstname] = useState("");
        const [lastname, setLastname] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmpassword, setConfirmpassword] = useState("");
        const [Submitted, setSubmitted] = useState(false);
        const [firstnameError, setfirstnameError] = useState("");
        const [lastnameError, setlastnameError] = useState("");
        const [emailError, setemailError] = useState("");
        const [passwordError, setpasswordError] = useState("");
        const [confirmpasswordError, setconfirmpasswordError] = useState("");
    
        const createUser=(e)=>{
            e.preventDefault();
            const newUser = {firstname, lastname, email, password, confirmpassword};
            console.log("Welcome", newUser);
            setSubmitted(true);
            setFirstname("");
            setLastname("");
            setEmail("");
            setPassword("");
            setConfirmpassword("");
        }
    
        const Message = () => {
            if (Submitted) {
                return "Thank you for submitting the form!";
            }
            else {
                return "Welcome. Please submit the form";
            }
        }
        
        const firstNameCheck = (e) => {
            setFirstname(e.target.value);
            if(e.target.value.length <2) {
                setfirstnameError("First name must be 2 characters or longer!")
            }
            else {
                setfirstnameError("");
            }
        }
    
        const lastNameCheck = (e) => {
            setLastname(e.target.value);
            if(e.target.value.length <2) {
                setlastnameError("Last name must be 2 characters or longer!")
            }
            else {
                setlastnameError("");
            }
        }
        const emailCheck = (e) => {
            setEmail(e.target.value);
            if(e.target.value.length <8) {
                setemailError("Email must be 8 characters or longer!")
            }
            else {
                setemailError("");
            }
        }
        const passwordCheck = (e) => {
            setPassword(e.target.value);
            if(e.target.value.length <8) {
                setpasswordError("Password must be at least 8 characters!")
            }
            else {
                setpasswordError("");
            }
        }
    
        const passwordMatch =(e) => {
            setConfirmpassword(e.target.value);
            if(e.target.value !== password) {
                setconfirmpasswordError("Confirmation passwords must match!")
            }
            else {
                setconfirmpasswordError("");
            }
    
        }
    
        return(
            <div>
                <div>
                    <form onSubmit = {createUser}>
                        {
                            Submitted ?
                            <h3>Thank you for submitting the form!</h3> :
                            <h3>Welcome. please submit the form</h3>
                        }
                        <div className="user-group">
                            <label className = "form-text">First Name:</label>
                            <input className = "form-control" type="text" onChange={ firstNameCheck } value= {firstname}/>
                        </div>
                        {
                            setfirstnameError ?
                            <p> { firstnameError }</p>:
                            <p></p>   
                        }
                        <div className="user-group">
                            <label className = "form-text">Last Name:</label>
                            <input className = "form-control" type="text" onChange={ lastNameCheck} value = {lastname}/>
                        </div>
                        {
                            setlastnameError ?
                            <p> { lastnameError }</p>:
                            <p></p>   
                        }
                        <div className="user-group">
                            <label className = "form-text">Email :</label>
                            <input className = "form-control" type="text" onChange={ emailCheck } value= {email}/>
                        </div>
                        {
                            setemailError ?
                            <p> { emailError }</p>:
                            <p></p>   
                        }
                        <div className="user-group"> 
                            <label className = "form-text">Password:</label>
                            <input className = "form-control" type="password" onChange={ passwordCheck } value={password}/>
                        </div>
                        {
                            setpasswordError ?
                            <p> { passwordError }</p>:
                            <p></p>   
                        }
                        <div className="user-group">
                            <label className = "form-text">Confirm Password:</label>
                            <input className = "form-control" type="password" onChange={ passwordMatch } value={confirmpassword}/>
                        </div>
                        {
                            setconfirmpasswordError ?
                            <p> { confirmpasswordError }</p>:
                            <p></p>   
                        }
                        <input type="submit" value="Create User"/>

                        <br /><br />
                        <h3>Users</h3>
                    </form>
                    <br /><br />
                </div>
                <div>
                    <div>
                        <h3>Your Form Data</h3>
                        <p>First Name: {firstname}</p>
                        <p>Last Name: {lastname}</p>
                        <p>Email: {email}</p>
                        <p>Password: {password}</p>
                        <p>Confirm Password: {confirmpassword}</p>
                    </div>
                </div>
            </div>
        )
    }
    

export default LoginForm;