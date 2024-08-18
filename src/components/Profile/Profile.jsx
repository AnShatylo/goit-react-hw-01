import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileContainer}>
      <div className={css.profileContainerHead}>
        <img src={image} alt={name} className={css.profileImg}/>
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileListItem}>
          <span className={css.profileListItemTitle}>Followers</span>
          <span className={css.profileListItemSubtitle}>{stats.followers}</span>
        </li>
        <li className={css.profileListItem}>
          <span className={css.profileListItemTitle}>Views</span>
          <span className={css.profileListItemSubtitle}>{stats.views}</span>
        </li>
        <li className={css.profileListItem}>
          <span className={css.profileListItemTitle}>Likes</span>
          <span className={css.profileListItemSubtitle}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
