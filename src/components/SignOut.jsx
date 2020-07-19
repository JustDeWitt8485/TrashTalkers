import React from 'react';
import {Link} from 'react-router-dom'

const SignOut = () =>{
    setTimeout(function () {
        window.location.href = "/"; //will redirect to your blog page (an ex: blog.html)
     }, 5000)
    return (
        <>
            <h3>Thanks for visting, we hope to see you again soon.</h3>
            <p> You will be redirected in 5 seconds, if that doesn't occur, plese click this link: </p>
            <Link to="/">Home</Link>

        </>
    )
}
export default SignOut