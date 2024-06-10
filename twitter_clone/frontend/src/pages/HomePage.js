import React from 'react';
import CreateTweet from '../components/Tweet/CreateTweet';
import Timeline from '../components/Tweet/Timeline';

const HomePage = () => {
  return (
    <div>
      <CreateTweet />
      <Timeline />
    </div>
  );
};

export default HomePage;
