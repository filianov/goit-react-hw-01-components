import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => (
  <li className={styles.item}>
    {friend.isOnline ? (
      <span className={styles.statusIsOnline}></span>
    ) : (
      <span className={styles.statusIsOffline}></span>
    )}
    <img className={styles.avatar} src={friend.avatar} alt="Foto" width="48" />
    <p className={styles.name}>{friend.name}</p>
  </li>
);

FriendListItem.propTypes = {
  friend: PropTypes.object.isRequired,
};

export default FriendListItem;
