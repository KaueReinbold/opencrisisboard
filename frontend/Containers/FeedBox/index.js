import React, { Component } from 'react';
import styles from './styles';

class FeedBox extends Component {
  render() {
    return (
      <div>
        FeedBox: {this.props.currentForum}
      </div>
    );
  }
}

export default FeedBox;
