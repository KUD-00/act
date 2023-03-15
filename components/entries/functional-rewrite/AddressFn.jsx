import React, { useState } from "react";
import Txt from "../Txt";

function AddressFn() {
    const [email, setEmail] = useState('');

    const validate = () => {
        const result = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
        return !result
    };

    const handleChange = e => {
        console.log("Here")
        setEmail(e.target.value);
    };

    const txtProps = {
        title: "",
        onChange: handleChange,
        placeholder: "sample@sample.com",
        value: email,
    }

    return (
        <>
            <Txt {...txtProps}></Txt>
            {validate() &&
                <p className="validation-error">not a valid email format</p>
            }
        </>
    )
}
export default AddressFn;