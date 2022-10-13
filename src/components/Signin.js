import React , {useState} from 'react';


function Signin()
{
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    return(
        <div className="Signin">
      
        <form>
            <div className='Name-container'>
                <label>name:</label>
                <input type="text" name="name" onChange={(e)=>setName(e.target.value)}></input>
                
            </div>
            <div className='Password-container'>
                <label>password:</label>
                <input type="password" name="password" onChange={(e)=>setName(e.target.value)}></input>
               
            </div>
            <div className='Submit-container'>
                <input type="submit" value="submit"></input>
            </div>
            
            
        </form>
       
    </div>
    );
}
export default Signin;