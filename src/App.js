import './App.css';
import React from 'react';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import user from './data/user.json';
import statsData from './data/data.json';

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
    </div>
  );
}

export default App;
