import React, { useState } from "react";
import Txt from "../Txt";

function EmailFn() {
    const [email, setEmail] = useState('');

    const validate = () => {
        const result = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
        if (!result) return (
            <p className="validation-error">not a valid email format</p>
        )
    };

    const handleChange = e => {
        setEmail(e.target.value);
    };

    const txtProps = {
        title: "",
        value: email,
        onChange: handleChange,
        placeholder: "sample@sample.com",
        validate: validate,
    }

    return (
        <Txt {...txtProps}></Txt>
    )
}
export default EmailFn;