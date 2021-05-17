import React from 'react'
import Layout from '../components/Layout';

function contact() {
    return (
        <Layout>
            <h1>contact page</h1>
            <form name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            >
                <input name="name" placeholder="Your Name" type="text" />
                <input name="email" placeholder="name@name.com" type="email" />
                <textarea name="message" id="" cols="30" rows="10"></textarea>
                <button>Send</button>
                </form>


        </Layout>
    )
}

export default contact
