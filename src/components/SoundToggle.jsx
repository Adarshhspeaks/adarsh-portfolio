import React, { useEffect, useState } from 'react';
import { ambientAudio } from '../utils/audio';
import Magnetic from './Magnetic';

const SoundToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      ambientAudio.play().catch(() => setIsPlaying(false));
    } else {
      ambientAudio.pause();
    }
  }, [isPlaying]);

  return (
    <div className="sound-toggle-wrapper">
      <Magnetic>
        <button 
          className="sound-toggle" 
          onClick={() => setIsPlaying(!isPlaying)}
        >
          SOUND {isPlaying ? "ON" : "OFF"}
        </button>
      </Magnetic>
    </div>
  );
};

export default SoundToggle;
