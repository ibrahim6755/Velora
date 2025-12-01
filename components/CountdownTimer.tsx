"use client";

import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState({
    days: 1,
    hours: 4,
    minutes: 57,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Set target date to a specific time (e.g., tomorrow at 4:57 PM)
    const now = new Date();
    const targetDate = new Date(
      now.getTime() +
        1 * 24 * 60 * 60 * 1000 +
        4 * 60 * 60 * 1000 +
        57 * 60 * 1000
    );

    const calculateTime = () => {
      const currentTime = new Date().getTime();
      const distance = targetDate.getTime() - currentTime;

      if (distance > 0) {
        setTime({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / 1000 / 60) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      } else {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mb-8 z-50 flex gap-3 flex-wrap justify-center">
      <span className="uppercase flex items-center justify-center flex-col w-fit text-black font-extrabold text-3xl bg-gray-200 p-4 rounded-xl">
        {String(time.days).padStart(2, "0")}
        <span className="font-extralight text-xs">Day</span>
      </span>
      <span className="uppercase flex flex-col justify-center items-center w-fit text-black font-extrabold text-3xl bg-gray-200 p-3 rounded-xl">
        {String(time.hours).padStart(2, "0")}
        <span className="font-extralight text-xs">hours</span>
      </span>
      <span className="uppercase flex flex-col items-center justify-center w-fit text-black font-extrabold text-3xl bg-gray-200 p-3 rounded-xl">
        {String(time.minutes).padStart(2, "0")}
        <span className="font-extralight text-xs">minutes</span>
      </span>
      <span className="uppercase flex flex-col items-center justify-center w-fit text-black font-extrabold text-3xl bg-gray-200 p-3 rounded-xl">
        {String(time.seconds).padStart(2, "0")}
        <span className="font-extralight text-xs">sec</span>
      </span>
    </div>
  );
};

export default CountdownTimer;
