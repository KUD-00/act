import React from 'react';
import BaseEntry from './BaseEntry';

class Email extends BaseEntry {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        };
    }

    validate = () => {
        const result = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email);
        return result;
    };

    handleChange = e => {
        this.setState({ email: e.target.value });
    };

    data = () => {
        return { email: this.state.email };
    }

    _render() {
        return (
            <>
                {this.props.isPreview && this.validate() ? (
                    <div class="entry-preview">
                        <div class="preview-title">{this.props.title}</div>
                        <div class="preview-answer">{this.state.email}</div>
                    </div>
                )
                    : (
                        <>
                            {this.props.handleBack()}
                            <input className="txt" value={this.state.email} placeholder="sample@sample.com"
                                onChange={this.handleChange}></input>
                            {this.state.email != "" && !this.validate() &&
                                <p className="validation-error">not a valid email format</p>
                            }
                        </>
                    )
                }
            </>
        )
    }
}

export default Email;
