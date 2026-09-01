import React, { useEffect, useState } from 'react';
import { animate } from 'framer-motion';

const Counter = ({ from, to, duration, symbol = '' }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const controls = animate(from, to, {
      duration: duration,
      onUpdate: (value) => setCount(Math.floor(value)),
      ease: [0.16, 1, 0.3, 1]
    });
    return () => controls.stop();
  }, [from, to, duration]);

  return <span className="metric-value">{count}{symbol}</span>;
};

export default Counter;
