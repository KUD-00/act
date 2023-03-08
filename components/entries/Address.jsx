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
    };

    handleChange = e => {
        this.setState({ email: e.target.value });
    };

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
