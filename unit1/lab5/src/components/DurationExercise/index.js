import React, { useState, useEffect } from 'react';

function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  function formatTime(sec) {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = Math.floor(sec % 60);

    return [hours, minutes, seconds]
      .map(v => v < 10 ? "0" + v : v)
      .filter((v,i) => v !== "00" || i > 0)
      .join(":");
  }

  return (
    <div>
      <h1>{name}</h1>
      <p>Time: {formatTime(seconds)}</p>
      <button onClick={toggle}>{isActive ? 'Pause' : 'Start'}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default DurationExercise;
