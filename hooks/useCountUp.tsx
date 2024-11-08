import { useState, useEffect } from "react";

export function useCountUp(target: number, duration: number, isOn: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isOn) {
      setCount(0); // Reset count when isOn is false
      return;
    }

    let start = 0;
    const increment = target / (duration / 10);

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(interval);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 10);

    return () => clearInterval(interval);
  }, [target, duration, isOn]); // Added isOn as a dependency

  return count;
}