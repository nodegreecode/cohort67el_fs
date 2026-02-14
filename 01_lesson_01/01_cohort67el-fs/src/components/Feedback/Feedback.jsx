import './styles.css';
import Button from '../Button/Button.jsx';
import { useState } from 'react';

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const addLike = () => setLikes((prevValue) => prevValue + 1);
  const addDislike = () => setDislikes((prevValue) => prevValue + 1);
  const resetFeedbacks = () => {
    setLikes(0);
    setDislikes(0);
  };
  return (
    <div className="feedback">
      <div className="feedback-group">
        <div className="button-control">
          <Button name="Like" onClick={addLike} />
        </div>
        <div className="feedback-count-control">
          <span className="feedback-count">{likes}</span>
        </div>
      </div>
      <div className="feedback-group">
        <div className="button-control">
          <Button name="Dislike" onClick={addDislike} />
        </div>
        <div className="feedback-count-control">
          <span className="feedback-count">{dislikes}</span>
        </div>
      </div>
      <Button name="Reset Results" onClick={resetFeedbacks} />
    </div>
  );
}

export default Feedback;
