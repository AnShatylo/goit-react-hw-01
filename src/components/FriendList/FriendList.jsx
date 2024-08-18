import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export default function Profile({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(item => {
        return (
          <li key={item.id} className={css.friendListItem}>
            <FriendListItem friend={item} />
          </li>
        );
      })}
    </ul>
  );
}
