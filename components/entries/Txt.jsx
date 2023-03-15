import React from 'react';
import BaseEntry from './BaseEntry';

class Txt extends BaseEntry {
  constructor(props) {
    super(props);
  }

  _render() {
    return (
      <>
        <input type="text" class="txt" value={this.props.value}
          placeholder={this.props.placeholder} />
        {/* {validates.map((validate) => (
          validate()
        ))} */}
      </>
    )
  }
}

export default Txt;
