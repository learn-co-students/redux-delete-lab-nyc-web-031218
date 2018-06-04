import React, { Component } from 'react';

class Band extends Component {
  handleClick() {
    this.props.store.dispatch({
      type: "DELETE_BAND",
      id: this.props.band.id
    })
  }

  render() {
    console.log(this.props.store)
    return(
      <li>
        {this.props.band.text}
        <button onClick={() => this.handleClick()}>x</button>
      </li>
    );
  }
};

export default Band;
