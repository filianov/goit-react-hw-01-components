import React, { Fragment } from 'react';
import Profile from './SocialNetworkProfiles/Profile';
import user from './SocialNetworkProfiles/user.json';
import Statistics from './Statistics/Statistics';
import statisticalData from './Statistics/statistical-data.json';
import friends from './FriendList/friends.json';
import FriendList from './FriendList/FriendList';
import transactions from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => (
  <Fragment>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </Fragment>
);

export default App;
