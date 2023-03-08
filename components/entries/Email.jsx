import React from 'react';
import Txt from './Txt';

class Email extends Txt {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        };
    }

    validate = () => {
        const result = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email);
        return !result;
    };

    handleChange = e => {
        this.setState({ email: e.target.value });
    };

    data = () => {
        return this.state.email;
    }

    _render() {
        return (
            <>
                <input className="txt" value={this.state.email} placeholder="sample@sample.com" onChange={this.handleChange}></input>
                {this.state.email != "" && this.validate() &&
                    <p className="validation-error">not a valid email format</p>
                }
            </>
        )
    }
}

export default Email;
