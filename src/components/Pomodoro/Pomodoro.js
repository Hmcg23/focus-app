import './Pomodoro.css';
import { useEffect, useState } from 'react';

function Pomodoro() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [currentTimer, setCurrentTimer] = useState('');

  console.log(currentTimer);

  let timer;
  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      return () => clearInterval(timer);
    } else {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timer = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);

      if (seconds === -1) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }

    return () => clearInterval(timer);
       
  }, [minutes, seconds]);

  const handleClick = () => {
    if (currentTimer === 'focus') {
      setMinutes(25);
      setSeconds(0);
    } else if (currentTimer === 'short-break') {
      setMinutes(5);
      setSeconds(0);
    } else if (currentTimer === 'long-break') {
      setMinutes(15);
      setSeconds(0);
    }
  }


  return (
    <div className='pomodoro'>
      <div className='buttons'>
        <button className={'focus-' + currentTimer} onClick={() => { 
          setMinutes(25);
          setSeconds(0);
          setCurrentTimer('focus');
          console.log(currentTimer);
          }}>Focus</button>
        <button className={'short-break-' + currentTimer} onClick={() => { 
          setMinutes(5);
          setSeconds(0);
          setCurrentTimer('short-break');
          console.log(currentTimer);
          }}>Short Break</button>
        <button className={'long-break-' + currentTimer} onClick={() => { 
          setMinutes(15);
          setSeconds(0);
          setCurrentTimer('long-break');
          console.log(currentTimer);
          }}>Long Break</button>
      </div>
      <h1 className='timer'>{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}</h1>
      <button className='start' onClick={handleClick}>Start!</button>
    </div>
  );
}

export default Pomodoro;