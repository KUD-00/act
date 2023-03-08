import React, { useState } from "react";

function EmailFn() {
    const [email, setEmail] = useState('');

    const validate = () => {
        const result = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
        return !result
    };

    const handleChange = e => {
        console.log("change")
        setEmail(e.target.value);
    };

    return (
        <>
            <input className="txt" value={email} placeholder="sample@sample.com" onChange={e => setEmail(e.target.value)}></input>
            <p>{email}</p>
            {validate() &&
                <p className="validation-error">not a valid email format</p>
            }
        </>
    )
}
export default EmailFn;