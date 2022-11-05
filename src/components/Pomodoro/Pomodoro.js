import './Pomodoro.css';
import ControlButtons from '../ControlButtons/ControlButtons';
import { useEffect, useState } from 'react';

function Pomodoro() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [showStart, setShowStart] = useState(true);
  const [currentTimer, setCurrentTimer] = useState('focus');
  const [isPaused, setIsPaused] = useState(false);



  let timer;
  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      return () => clearInterval(timer);
    } else {
      if (isPaused === true) {
        clearInterval(timer);
      } else if (isPaused === false) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        timer = setInterval(() => {

          setSeconds(seconds - 1);
        }, 1000);
      }
    }

    if (seconds === -1) {
      setMinutes(minutes - 1);
       setSeconds(59);
    }     

    return () => clearInterval(timer);
       
  }, [minutes, seconds]);

  const handleClick = () => {
    showStart ? setShowStart(false) : setShowStart(true);
    isPaused === false ? setIsPaused(true) : setIsPaused(false);
    console.log(isPaused);
    return () => clearInterval(timer);
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