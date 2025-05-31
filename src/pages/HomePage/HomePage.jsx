import { useState } from 'react';
import './HomePage.css';

export const HomePage = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleClickLike = () => {
    setLikes(likes + 1);
  };

  const handleClickDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="container">
      <div className="container">
        <div className="joke">
          <div className="joke__body">
            <div className="joke__user">
              <img
                className="user-avatar"
                src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
              />
              <p className="user-name">Neroxx</p>
            </div>

            <p className="joke__text">
              The secret service isn't allowed to yell "Get down!" anymore when the president is
              about to be attacked. Now they have to yell "Donald, duck!"
            </p>
          </div>
          <div className="joke__likes">
            <button
              onClick={handleClickLike}
              id="btn-up"
              className="btn-like btn-like--up"
            ></button>
            <span id="likes-up" className="likes-count likes-count--up">
              {likes}
            </span>
            <button
              onClick={handleClickDislike}
              id="btn-down"
              className="btn-like btn-like--down"
            ></button>
            <span id="likes-down" className="likes-count likes-count--down">
              {dislikes}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
