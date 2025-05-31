import { useEffect, useState } from 'react';
import './HomePage.css';
import { Joke } from '../../components/Joke/Joke';

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const responseData = await response.json();
      setJokes(responseData.data.cz);
    };
    fetchJoke();
    console.log(jokes);
  }, []);

  return (
    <div className="container">
      <Joke />
    </div>
  );
};
