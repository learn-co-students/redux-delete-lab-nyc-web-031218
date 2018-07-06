import React, { Component } from 'react';

class Band extends Component {

  handleDelete = () => {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    })
  }
  render() {
    console.log(this.props.store)
    return(
      <div>
        <li>{this.props.band.text}</li>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
};

export default Band;
