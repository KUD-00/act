import React from 'react';
import BaseEntry from './BaseEntry';

class Sel extends BaseEntry {
  constructor(props) {
    super(props);
  }

  _render() {
    return (
        <select className="sel">
            {this.props.entry_data.map((option) => (
                <option value={option} key={option}>{option}</option>
            ))}
        </select>
    )
  }
}

export default Sel;