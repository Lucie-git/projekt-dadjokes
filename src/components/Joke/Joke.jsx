import { useState } from 'react';
import './Joke.css';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [likesUp, setLikesUp] = useState(likes);
  const [likesDown, setLikesDown] = useState(dislikes);

  const handleClickLike = () => {
    setLikesUp(likesUp + 1);
  };

  const handleClickDislike = () => {
    setLikesDown(likesDown + 1);
  };

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button onClick={handleClickLike} id="btn-up" className="btn-like btn-like--up"></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {likesUp}
        </span>
        <button
          onClick={handleClickDislike}
          id="btn-down"
          className="btn-like btn-like--down"
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {likesDown}
        </span>
      </div>
    </div>
  );
};
