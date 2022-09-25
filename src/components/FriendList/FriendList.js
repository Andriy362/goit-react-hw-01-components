import { PropTypes } from 'prop-types';

import {
  Container,
  ImgPosition,
  ItemList,
  IsActive,
} from 'components/FriendList/FriendList.style';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      {friends.map(friend => (
        <ItemList key={friend.id}>
          <IsActive isOnline={friend.isOnline}></IsActive>
          <ImgPosition src={friend.avatar} alt="User avatar" width="48" />
          <p>{friend.name}</p>
        </ItemList>
      ))}
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
