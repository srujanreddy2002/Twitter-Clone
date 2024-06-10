import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';

const TweetContext = createContext();

export const TweetProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    if (user) {
      const { data } = await axios.get('/api/tweets');
      setTweets(data);
    }
  };

  const createTweet = async (text, media) => {
    if (user) {
      const { data } = await axios.post('/api/tweets', { text, media });
      setTweets([data, ...tweets]);
    }
  };

  const deleteTweet = async (id) => {
    if (user) {
      await axios.delete(`/api/tweets/${id}`);
      setTweets(tweets.filter((tweet) => tweet._id !== id));
    }
  };

  return (
    <TweetContext.Provider value={{ tweets, fetchTweets, createTweet, deleteTweet }}>
      {children}
    </TweetContext.Provider>
  );
};

export default TweetContext;
