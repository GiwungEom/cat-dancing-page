import { useState } from 'react';
import catImage from '../assets/images/cat.svg';
import '../styles/animations.css';
import './DancingCat.css';

const DancingCat = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div className="dancing-cat-container">
      <h1 className="title">Dancing Cat</h1>
      <p className="subtitle">Watch the cat bust a move!</p>

      <div className={`cat-wrapper ${isAnimating ? 'dancing' : 'paused'}`}>
        <img
          src={catImage}
          alt="Dancing Cat"
          className="cat-image"
        />
      </div>

      <button
        onClick={toggleAnimation}
        className="control-button"
        aria-label={isAnimating ? 'Pause animation' : 'Start animation'}
      >
        {isAnimating ? '⏸️ Pause' : '▶️ Dance!'}
      </button>

      <div className="info">
        <p>Click the button to start or stop the animation</p>
      </div>
    </div>
  );
};

export default DancingCat;
