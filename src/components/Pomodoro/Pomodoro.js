import './Pomodoro.css';
import ControlButtons from '../ControlButtons/ControlButtons';
import { useEffect, useState } from 'react';

function Pomodoro() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [showStart, setShowStart] = useState(true);
  const [currentTimer, setCurrentTimer] = useState('focus');
  const [isPaused, setIsPaused] = useState(false);

  console.log(currentTimer);

  const currentTime = () => {
    if (currentTimer === 'focus') {
      setMinutes(25);
      setSeconds(0);
    } else if (currentTimer === 'short-break') {
      setMinutes(5);
      setSeconds(0);
    }
  }

  let timer;
  useEffect(() => {
    currentTime();
    if (minutes === 0 && seconds === 0) {
      return () => clearInterval(timer);
    } else {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timer = setInterval(() => {
        setSeconds(seconds - 1);
        currentTime();
      }, 1000);

      if (seconds === -1) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }

    return () => clearInterval(timer);
       
  }, [minutes, seconds]);

  const handleClick = () => {
    showStart ? setShowStart(false) : setShowStart(true);
    clearInterval(timer);
    currentTime();
  }


  return (
    <div className='pomodoro'>
      <div className='buttons'>
        <button className={'focus-' + currentTimer} onClick={() => { 
          setMinutes(25);
          setSeconds(0);
          setCurrentTimer('focus');
          }}>Focus</button>
        <button className={'short-break-' + currentTimer} onClick={() => { 
          setMinutes(5);
          setSeconds(0);
          setCurrentTimer('short-break');
          }}>Short Break</button>
      </div>
      <h1 className='timer'>{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}</h1>
      <ControlButtons handleClick={handleClick} showStart={showStart} timer={timer} />
    </div>
  );
}

export default Pomodoro;