import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = ''
}) => {
  const [count, setCount] = useState(0);
  const {
    ref,
    inView
  } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });
  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);
  useEffect(() => {
    if (!inView) return;
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      const runtime = timestamp - startTimeRef.current;
      const progress = runtime / duration;
      if (progress < 1) {
        const value = Math.floor(progress * end);
        setCount(value);
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [inView, end, duration]);
  return <div ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </div>;
};