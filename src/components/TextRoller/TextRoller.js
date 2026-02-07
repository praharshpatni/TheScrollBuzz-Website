import React, { useEffect, useRef } from "react";
import "./TextRoller.css";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function TextRoller({ finalText = "", duration = 100 }) {
    const refs = useRef([]);

    useEffect(() => {
        const chars = finalText.split("");

        chars.forEach((char, index) => {
            let count = 0;

            const roll = () => {
                const randomLetter =
                    char === " " ? " " : letters[Math.floor(Math.random() * letters.length)];

                refs.current[index].innerText = randomLetter;
                count++;

                if (count > 10) {
                    refs.current[index].innerText = char;
                    return;
                }

                setTimeout(roll, duration);
            };

            setTimeout(roll, index * 100);
        });
    }, [finalText, duration]);

    return (
        <h1 className="roller-title">
            {finalText.split("").map((char, i) => (
                <span
                    key={i}
                    ref={(el) => { (refs.current[i] = el) }}
                    className="roller-letter"
                >
                    {char}
                </span>
            ))}
        </h1>
    );
}
