import PropTypes from 'prop-types';

const Friends = ({ isOnline, id, name, avatar }) => {
  return (
    <li className="item">
      {/* status */}
      <span className={isOnline ? 'circle__online' : 'circle__offline'}>.</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

Friends.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friends;
