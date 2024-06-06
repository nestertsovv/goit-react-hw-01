import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <div>
      <img src={avatar} alt={name + ' Avatar'} width="48" />
      <p className={styles.name}>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
