import { useEffect, useState } from 'react';
import './HomePage.css';
import { Joke } from '../../components/Joke/Joke';

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const responseData = await response.json();
      setJokes(responseData.data);
    };
    fetchJoke();
  }, []);

  if (jokes.length === 0) return 'Loading data...';
  else
    return jokes.map((joke) => {
      return (
        <div key={joke.id} className="container">
          <Joke
            userAvatar={joke.avatar}
            userName={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
          />
        </div>
      );
    });
};
