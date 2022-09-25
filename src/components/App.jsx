import { Profile } from './Profile/Profile';
import user from '../components/Profile/user.json';
import { Statistics } from './Statistic/Statistic';
import statist from '../components/Statistic/data.json';
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statist} />
    </div>
  );
};
