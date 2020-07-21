import React from 'react';
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap';

const SignOut = () =>{
    setTimeout(function () {
        window.location.href = "/"; //will redirect to your blog page (an ex: blog.html)
     }, 5000)
    return (
        <Card
        bg="light"
        border="info"
        style={{ width: "28rem", 
        padding: "1rem", 
        margin: "auto" 
        }}>
            <h3>Thanks for visting, we hope to see you again soon.</h3>
            <p> You will be redirected in 5 seconds, if that doesn't occur, plese click this link: 
                <br/>
            <Link to="/">Home</Link>
            </p>
        </Card>
    )
}
export default SignOut