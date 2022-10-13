import React , {useState} from 'react';


function SignUpDetails()
{
    const [name,setName]=useState("");
    const [mobileNumber,setMobileNumber]=useState();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    return(
        <div className="Signin">
      
        <form>
            <div className='Name-Container'>
                <label>name:</label>
                <input type="text" name="name" onChange={(e)=>setName(e.target.value)}></input>
                
            </div>
            <div className='PhoneNumber-Container'>
                <label>Mobile Number:</label>
                <input type="number" name="mobileNumber" onChange={(e)=>setMobileNumber(e.target.value)}></input>
                
            </div>
            <div className='Email-Container'>
                <label>Email:</label>
                <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)}></input>
                
            </div>
            <div className='Password-Container'>
                <label>password:</label>
                <input type="password" name="password" onChange={(e)=>setName(e.target.value)}></input>
               
            </div>
            <div className='ConfirmPassword-Container'>
                <label>password:</label>
                <input type="password" name="confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)}></input>
               
            </div>
            <div className='Submit-Container'>
                <input type="submit" value="Sign Up"></input>
            </div>
            
            
        </form>
       
    </div>
    );
}
export default SignUpDetails;