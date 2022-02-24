import React, {useState} from "react";
import {PageLayout} from '../Common/PageLayout';
import { Input } from "../Common/Input";
import styled from 'styled-components';


const Form= styled.form`
width: 40em;
margin:auto;
height: 20em;
max-width:600px;
background:white;
border:1px solid black;
padding: 16px;;
color:black;
border-radius: 4px;
`;



function Login()
{
    function handleInputChange(e) 
{
e.preventDefault();

setFormFields(s => ({
    ...s ,
     [e.target.name]: e.target.value
            
            }));
}


    const [formFields, setFormFields]=useState({username: '' , password: ''});

    return(
        <PageLayout>
        <h1>Welcome to Login Page</h1>
        <Form>
<Input  
name="username" 
placeholder="Enter your name"
onChange={handleInputChange}
value={formFields.username}
type="text"
/>

<Input  style={{marginTop:'20px'}}
name="password" 
placeholder="Enter"
onChange={handleInputChange}
value={formFields.password}
type="password"
/>

        </Form>
        </PageLayout>
    )

}

export default Login;