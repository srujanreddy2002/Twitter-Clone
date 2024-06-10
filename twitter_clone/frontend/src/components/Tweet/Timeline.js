import React, { useEffect, useContext } from 'react';
import TweetContext from '../../context/TweetContext';
import Tweet from './Tweet';

const Timeline = () => {
  const { tweets, fetchTweets } = useContext(TweetContext);

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet key={tweet._id} tweet={tweet} />
      ))}
    </div>
  );
};

export default Timeline;
