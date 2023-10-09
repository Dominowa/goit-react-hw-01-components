import React from 'react';
import PropTypes from 'prop-types';
import './FriendList.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className="friendItem">
    <span
      className={`friendStatus ${
        isOnline ? 'friendStatus-online' : 'friendStatus-offline'
      }`}
    ></span>
    <img
      className="friendAvatar"
      src={avatar}
      alt={`${name}'s avatar`}
      width="48"
    />
    <p className="friendName">{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

const FriendList = ({ friends }) => (
  <ul className="friendList">
    {friends.map(friend => (
      <FriendListItem key={friend.id} {...friend} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
