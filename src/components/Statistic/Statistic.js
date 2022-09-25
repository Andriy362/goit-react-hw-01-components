import { PropTypes } from 'prop-types';
import {
  Container,
  ListInfo,
  List,
  ItemInfo,
  Header,
} from 'components/Statistic/Statistic.style';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Header> {title}</Header>}
      <List>
        {stats.map(stat => (
          <ListInfo key={stat.id}>
            <ItemInfo>{stat.label}</ItemInfo>
            <ItemInfo>{stat.percentage}%</ItemInfo>
          </ListInfo>
        ))}
      </List>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
