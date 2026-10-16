import React, { useEffect, useState } from 'react';

const TypingAnimation = () => {
    const phrases = [
        "do anything.",
        "find matches.",
        "check scores.",
        "explore stats.",
        "get updates.",
        "compare players."
    ];

    const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
    let currentIndex = 0;

    useEffect(() => {
        const updateText = () => {
            currentIndex = (currentIndex + 1) % phrases.length;
            setCurrentPhrase(phrases[currentIndex]);
        };

        const interval = setInterval(updateText, 4000); // Change phrase every 4 seconds
        return () => clearInterval(interval); // Cleanup on component unmount
    }, [phrases]);

    return (
        <div className='flex w-1/2'>
            <h1 className='font-bold pr-5 text-5xl'>Where You Can</h1>
            <div>
                <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
                    {currentPhrase}
                </h1>
            </div>
        </div>
    );
};

export default TypingAnimation;
