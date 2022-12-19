// eslint-disable-next-line import/no-unresolved
import { useEffect, useState } from 'react';

const getPadTime = (time) => time.toString().padStart(2, '0');
export default function Timer(props) {
  // eslint-disable-next-line react/destructuring-assignment
  console.log(`Timer is ${props.timer}`);
  // eslint-disable-next-line react/destructuring-assignment
  const [timeLeft, setTimeLeft] = useState(props.timer);
  const [isCounting, setIsCounting] = useState(true);
  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - minutes * 60);
  useEffect(() => {
    const interval = setInterval(() => {
      // eslint-disable-next-line no-unused-expressions,react/destructuring-assignment
      if (isCounting && props.isTimerCounting) {
        // eslint-disable-next-line no-shadow
        setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
      }
    }, 1000);
    if (timeLeft === 0) setIsCounting(false);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react/destructuring-assignment
  }, [isCounting, props.isTimerCounting, props.isisTimerCounting, timeLeft]);
  const handleStart = () => {
    // eslint-disable-next-line react/destructuring-assignment
    if (timeLeft === 0) setTimeLeft(props.timer);
    setIsCounting(true);
  };
  const handleStop = () => {
    setIsCounting(false);
  };
  return (
    <div className='timer_block'>
      <div className='timer'>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      {/* eslint-disable-next-line react/button-has-type,jsx-a11y/control-has-associated-label */}
      <button className='icon-play' onClick={handleStart} />
      {/* eslint-disable-next-line react/button-has-type,jsx-a11y/control-has-associated-label */}
      <button className='icon-pause' onClick={handleStop} />
    </div>
  );
}
