import { useState, useEffect } from 'react';

export const useTypewriter = (text, speed = 50, startDelay = 1000) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Start typing after the delay
        const delayTimeout = setTimeout(() => {
            setIsTyping(true);
        }, startDelay);

        return () => clearTimeout(delayTimeout);
    }, [startDelay]);

    useEffect(() => {
        if (isTyping && currentIndex < text.length) {
            const prevChar =  currentIndex > 0 ? text[currentIndex - 1] : '';
            let typeSpeed = speed;

            if (prevChar === '.' || prevChar === '!' || prevChar === '?') {
                typeSpeed = 400; // 800ms pause after sentences
            }

            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, typeSpeed);

            return () => clearTimeout(timeout);
        } else if (isTyping && currentIndex >= text.length) {
            setIsComplete(true);
        }
    }, [currentIndex, text, speed, isTyping]);

    return { displayText, isTyping: isTyping && currentIndex < text.length, isComplete };
};