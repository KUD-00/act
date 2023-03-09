import React from 'react';
import BaseEntry from './BaseEntry';

class Txt extends BaseEntry {
  constructor(props) {
    super(props);
  }

  _render() {
    return (
      <>
        <p class="title">{this.props.title}</p>
        <input type="text" class="txt" value={this.props.value} 
        placeholder={this.props.placeholder} onChange={this.props.onChange}/>
      </>
    )
  }
}

export default Txt;
