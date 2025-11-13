import React, { useEffect, useState } from 'react';
interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}
export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 50,
  delay = 0,
  className = ''
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [delay]);
  useEffect(() => {
    if (!isVisible) return;
    setIsTyping(true);
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(intervalId);
      }
    }, speed);
    return () => clearInterval(intervalId);
  }, [text, speed, isVisible]);
  return <span className={`${className} ${isTyping ? 'after:content-["_"] after:animate-blink' : ''}`}>
      {displayText}
    </span>;
};