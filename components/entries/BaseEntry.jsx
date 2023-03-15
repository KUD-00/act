import React from 'react';

class BaseEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  validate() {
    const data = this.data();
    return true;
  }

  data() {
    return { text: "abc" }
  }

  hide() {
    this.state.show = false;
  }

  show() {

  }

  preview() {
    const data = this.data();
  }

  change() {

  }

  _render() {
    return (
      <div></div>
    )
  };


  render() {
    return (
      <div className="entry-warp">
        <div className="entry-title">
          <div>{this.props.title}</div>

          {this.props.required &&
            <span className="required">※</span>
          }

        </div>
        <div className="title-description" dangerouslySetInnerHTML={{__html: this.props.title_description}}></div>
        <div className="entry-input">
          {this._render()}
        </div>
        <div className="entry-description">{this.props.description}
        </div>
        { this.validate() &&
        <p className="validation-error">こちらは回答必須です。</p>
        }
      </div>
    )
  }
}

export default BaseEntry;
