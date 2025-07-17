import { useState, useEffect, useCallback } from 'react';

type TypingPhase = 'typing' | 'pausing' | 'deleting';

const TYPE_SPEED = 100;
const PAUSE_DURATION = 3000;
const DELETE_SPEED = 50;

export const useTypingEffect = (words: string[]) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [phase, setPhase] = useState<TypingPhase>('typing');

    const handleTyping = useCallback(() => {
        const currentWord = words[wordIndex];
        if (displayedText.length < currentWord.length) {
            setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        } else {
            setPhase('pausing');
        }
    }, [displayedText, wordIndex, words]);

    const handleDeleting = useCallback(() => {
        if (displayedText.length > 0) {
            setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        } else {
            setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            setPhase('typing');
        }
    }, [displayedText, words.length]);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;

        switch (phase) {
            case 'typing':
                timeoutId = setTimeout(handleTyping, TYPE_SPEED);
                break;
            case 'deleting':
                timeoutId = setTimeout(handleDeleting, DELETE_SPEED);
                break;
            case 'pausing':
            default:
                timeoutId = setTimeout(() => {
                    setPhase('deleting');
                }, PAUSE_DURATION);
                break;
        }

        return () => clearTimeout(timeoutId);
    }, [phase, handleTyping, handleDeleting]);

    return displayedText;
};
