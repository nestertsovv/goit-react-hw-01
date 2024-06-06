import styles from './Profile.module.css';

const Profile = ({
  name = 'Anonymous',
  tag = 'tag',
  location = 'London, England',
  image = 'https://placehold.co/400',
  stats: { followers = 0, views = 0, likes = 0 },
}) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperInto}>
          <img src={image} alt={name} className={styles.img} />
          <p className={styles.name}>{name}</p>
          <p className={styles.text}>@{tag}</p>
          <p className={styles.text}>{location}</p>
        </div>

        <ul className={styles.statsList}>
          <li>
            <span className={styles.statsTitle}>Followers</span>
            <span className={styles.statsDescr}>{followers}</span>
          </li>
          <li>
            <span className={styles.statsTitle}>Views</span>
            <span className={styles.statsDescr}>{views}</span>
          </li>
          <li>
            <span className={styles.statsTitle}>Likes</span>
            <span className={styles.statsDescr}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
