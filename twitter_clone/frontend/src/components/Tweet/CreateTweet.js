import React, { useState, useContext } from 'react';
import TweetContext from '../../context/TweetContext';

const CreateTweet = () => {
  const [text, setText] = useState('');
  const { createTweet } = useContext(TweetContext);

  const submitHandler = (e) => {
    e.preventDefault();
    createTweet(text);
    setText('');
  };

  return (
    <form onSubmit={submitHandler}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's happening?"
        required
      ></textarea>
      <button type="submit">Tweet</button>
    </form>
  );
};

export default CreateTweet;
