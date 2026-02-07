import React from "react";
import "./WavyText.css";

export default function WavyText({ text = "Processing..." }) {
    const chars = text.split("");
    const animationDuration = 1.5;
    const delayBetweenLetters = 0.1;
    const totalAnimationTime = (chars.length - 1) * delayBetweenLetters + animationDuration;

    const wavePercentage = (1.5 / totalAnimationTime * 100).toFixed(2);

    return (
        <div className="loader-container">
            <style>{`
                @keyframes wave-sequential {
                    0% {
                        transform: translateY(0);
                    }
                    ${(parseFloat(wavePercentage) * 0.5).toFixed(2)}% {
                        scale: 1.01;
                        transform: translateY(-2px);
                    }
                    ${wavePercentage}% {
                        transform: translateY(0);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }
            `}</style>
            <div className="wave">
                {chars.map((char, index) => {
                    const animationDelay = index * delayBetweenLetters;

                    return (
                        <span
                            key={index}
                            style={{
                                animationDelay: `${animationDelay}s`,
                                animationDuration: `${totalAnimationTime}s`
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}