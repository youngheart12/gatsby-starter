import React from 'react'

export default function contact() {
    return (
        <div>
            <form 
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field">
                <input name="name" placeholder="Your name" type="text"></input>
                <button>Send</button>
            </form>
        </div>
    )
}
