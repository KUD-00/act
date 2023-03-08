import React from 'react';

class BaseEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  validate() {
    return true;
  }

  data(value) {

  }

  hide() {

  }

  show() {

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
        <div className="title-description">{this.props.title_description}</div>
        <div className="entry-input">
          {this._render()}
        </div>
        <div className="entry-description">{this.props.description}
        </div>
      </div>
    )
  }
}

export default BaseEntry;
