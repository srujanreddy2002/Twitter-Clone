import React, { useContext } from 'react';
import TweetContext from '../../context/TweetContext';

const Tweet = ({ tweet }) => {
  const { deleteTweet } = useContext(TweetContext);

  return (
    <div>
      <h4>{tweet.user.username}</h4>
      <p>{tweet.text}</p>
      <button onClick={() => deleteTweet(tweet._id)}>Delete</button>
    </div>
  );
};

export default Tweet;
