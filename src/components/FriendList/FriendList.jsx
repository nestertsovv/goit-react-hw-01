import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends = [] }) => {
  return (
    <ul className={styles.list}>
      {friends.map(item => (
        <li key={item.id} className={styles.item}>
          <FriendListItem
            avatar={item.avatar}
            isOnline={item.isOnline}
            name={item.name}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
