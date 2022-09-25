import { PropTypes } from 'prop-types';
import {
  Container,
  DivContainer,
  ListItem,
  List,
  ItemSpan,
  ItemInfo,
  ItemInfoName,
} from 'components/Profile/Profile.style';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <DivContainer>
        <img src={avatar} alt={username} width="100" />
        <ItemInfoName>{username}</ItemInfoName>
        <ItemInfo>@{tag}</ItemInfo>
        <ItemInfo>{location}</ItemInfo>
      </DivContainer>
      <List>
        <ListItem>
          <ItemSpan>Followers</ItemSpan>
          <ItemInfo>{stats.followers}</ItemInfo>
        </ListItem>
        <ListItem>
          <ItemSpan>Views</ItemSpan>
          <ItemInfo>{stats.views}</ItemInfo>
        </ListItem>
        <ListItem>
          <ItemSpan>Likes</ItemSpan>
          <ItemInfo>{stats.likes}</ItemInfo>
        </ListItem>
      </List>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
