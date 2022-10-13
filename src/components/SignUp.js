import React from 'react';
import SignUpDetails from './SignUpDetails';
import { Link } from "react-router-dom";

function SignUp(){
    return(
        <div>
            <SignUpDetails/>
            <Link to="/">Back to Sign-In</Link>
        </div>
    );
}
export default SignUp;
