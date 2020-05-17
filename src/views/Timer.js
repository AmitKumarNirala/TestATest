import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(600);
  const [displayMin, setDisplayMin] = useState('Min');
  const [displaySec, setDisplaySec] = useState('Sec');
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }



  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);

        var min = Math.floor(seconds / 60);
        var sec = seconds - (min * 60);
        setDisplayMin(min)
        setDisplaySec(sec)

        if (sec < 10) {
          setDisplaySec('0'+sec)
        }
        if (min < 10) {
          setDisplayMin('0'+min)
        }
        if (min === 0 & sec === 0) {
          }
    
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">
        {displayMin}:{displaySec}
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
      </div>
    </div>
  );
};

export default Timer;


 
  




