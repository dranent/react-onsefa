import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const endTime = new Date(2023, 1, 28, 23, 59, 59); // February 28th, 2022 at 11:59:59 PM
    setIsRunning(true);

    const intervalId = setInterval(() => {
      const now = new Date();
      const remainingTime = Math.max(endTime - now, 0);

      const newHours = Math.floor((remainingTime / (1000 * 60 * 60)));
      const newMinutes = Math.floor((remainingTime / (1000 * 60)) % 60);
      const newSeconds = ((remainingTime / 1000) % 60).toFixed(2);

      if (remainingTime === 0) {
        clearInterval(intervalId);
        setIsRunning(false);
      }

      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="countdown">
      <div className={isRunning ? "timer running" : "timer"}>
        {`${hours} : ${minutes} : ${seconds}`}
        <br /><br /><br />
        <span>まもなく終了！</span>
      </div>
    </div>
  );
};

export default Countdown;
