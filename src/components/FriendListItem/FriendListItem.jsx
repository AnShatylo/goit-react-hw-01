import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function TransactionHistory({
  friend: { avatar, name, isOnline },
}) {
  const textColorClsx = clsx(isOnline ? css.textRed : css.textGreen);
  return (
    <div>
      <img
        src={avatar}
        alt={name}
        width="48"
        className={css.friendListItemImg}
      />
      <p className={css.friendListItemName}>{name}</p>
      <p className={textColorClsx}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
