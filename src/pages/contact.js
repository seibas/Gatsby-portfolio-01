import React from 'react'
import Layout from '../components/Layout';
import styled from "styled-components";




const LayoutContacts = styled.div`
background: rgb(255,133,65);
background: radial-gradient(circle, rgba(255,133,65,1) 0%, rgba(66,66,66,0.8014529885063941) 100%);

display:flex;
flex-direction: column;

justify-content:center;

  top: 25%; /* 25% from the top */
  width: 100%; /* 100% width */
  height:100vh;
  text-align: center; /* Centered text/links */
  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */tion: column;

`

function contact() {
    return (
        
        <LayoutContacts>
            <h1>contact page</h1>  <h1>Thank you for contacting</h1>
            <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
              


        </LayoutContacts>
    )
}

export default contact
