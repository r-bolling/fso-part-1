import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(6).fill(0));

  //from mozilla docs
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const handleClick = (_) => setSelected(getRandomInt(0, anecdotes.length));

  const handleVote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  const mostVotedAnecdote = (_) => {
    let largestArrayNum = 0;
    let largestNum = 0;
    for (let i = 0; i < anecdotes.length; i++) {
      if (points[i] > largestArrayNum) {
        largestNum = i;
        largestArrayNum = points[i];
      }
    }
    return largestNum;
  };

  console.log(points);
  return (
    <div>
      <h1>Anecdote</h1>
      {props.anecdotes[selected]}
      <br />
      <p>has {points[selected]} votes</p>
      <br />
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleClick}>next anecdote</button>

      <h1>Highest Voted Anecdote</h1>
      {props.anecdotes[mostVotedAnecdote()]}
      <p>has {points[mostVotedAnecdote()]} votes</p>
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
