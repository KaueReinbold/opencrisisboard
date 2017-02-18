import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './styles.css';

import PlaceholderImage from 'SharedStyles/placeholder.jpg';
import Button from 'Components/Button';

class Opinion extends Component {
  render() {
    const {
      userAvatar,
      userName,
      userGitHandler,
      opDate,
      opContent,
    } = this.props;

    let favCount = '';

    return (
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <img className={styles.avatar} src={userAvatar} />
          <div className={styles.userInfo}>
            <div className={styles.name}>{userName}</div>
            <a href={`https://www.github.com/${userGitHandler}`} target="_blank" className={styles.gitHandler}>
              <i className={classnames('fa fa-github-alt', styles.gitIcon)}></i>
              <span>{userGitHandler}</span>
            </a>
          </div>
          <div className={styles.dateInfo}>{opDate}</div>
          <Button noUppercase>Quote</Button>
        </div>

        <div className={styles.opContent}>
          {opContent}
        </div>

        <div className={styles.commentFooter}>

        </div>
      </div>
    );
  }
}

Opinion.defaultProps = {
  userAvatar: PlaceholderImage,
  userName: 'User name',
  userGitHandler: 'github',
  opDate: 'a day ago',
  opContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

Opinion.propTypes = {
  userAvatar: React.PropTypes.string,
  userName: React.PropTypes.string,
  userGitHandler: React.PropTypes.string,
  opDate: React.PropTypes.string,
  opContent: React.PropTypes.string,
};

export default Opinion;