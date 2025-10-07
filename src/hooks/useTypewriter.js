import { useState, useEffect } from 'react';

export const useTypewriter = (htmlText, typeSpeed = 50, startDelay = 1000) => {
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const delayTimeout = setTimeout(() => {
            setIsTyping(true);
        }, startDelay);

        return () => clearTimeout(delayTimeout);
    }, [startDelay]);

    useEffect(() => {
        if (!isTyping) return;

        let cursorPosition = 0;
        let tag = "";
        let writingTag = false;
        let tagOpen = false;
        let tempTypeSpeed = 0;
        let currentHTML = "";
        let currentTagElement = null;

        const type = () => {
            if (writingTag === true) {
                tag += htmlText[cursorPosition];
            }

            if (htmlText[cursorPosition] === "<") {
                tempTypeSpeed = 0;
                if (tagOpen) {
                    tagOpen = false;
                    writingTag = true;
                } else {
                    tag = "";
                    tagOpen = true;
                    writingTag = true;
                    tag += htmlText[cursorPosition];
                }
            }

            if (!writingTag && tagOpen) {
                tag += htmlText[cursorPosition];
            }

            if (!writingTag && !tagOpen) {
                if (htmlText[cursorPosition] === " ") {
                    tempTypeSpeed = 0;
                } else {
                    // Add sentence delay
                    const prevChar = cursorPosition > 0 ? htmlText[cursorPosition - 1] : '';
                    if (prevChar === '.' || prevChar === '!' || prevChar === '?') {
                        tempTypeSpeed = 1000; // 800ms pause after sentences
                    } else {
                        tempTypeSpeed = (Math.random() * typeSpeed) + 50;
                    }
                }
                currentHTML += htmlText[cursorPosition];
            }

            if (writingTag === true && htmlText[cursorPosition] === ">") {
                tempTypeSpeed = (Math.random() * typeSpeed) + 50;
                writingTag = false;
                if (tagOpen) {
                    // Opening tag - add the complete tag to HTML
                    currentHTML += tag;
                    tagOpen = false;
                } else {
                    // Closing tag
                    currentHTML += tag;
                }
                tag = "";
            }

            // Update React state
            setDisplayText(currentHTML);

            cursorPosition += 1;
            if (cursorPosition < htmlText.length) {
                setTimeout(type, tempTypeSpeed);
            } else {
                setIsComplete(true);
            }
        };

        // Start typing
        type();

    }, [htmlText, typeSpeed, isTyping]);

    return { 
        displayText, 
        isTyping: isTyping && !isComplete, 
        isComplete 
    };
};