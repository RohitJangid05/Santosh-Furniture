import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(ScrollTrigger, Draggable);

const ScrollingText = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const element = scrollRef.current;

        const totalWidth = element.scrollWidth / 2;

        gsap.to(element, {
            x: -totalWidth,
            duration: 20,
            ease: "linear",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
            }
        });
    }, []);

    const items = [
        "Teak Wood", "Red Wood", "Pine Wood", "Beach Wood",
        "Door", "Bed", "Dining Set", "Sofa", "Door Frame", "Lipping Patti"
    ];

    return (
        <div className="w-full py-3 border-y-2 border-zinc-300 overflow-hidden">
            <div className="flex gap-5 w-max whitespace-nowrap" ref={scrollRef}>
                {[...items, ...items].map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#e8c093b9] text-[#364152] px-4 py-2 rounded-md capitalize text-2xl"
                    >
                        <h1>{item}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScrollingText;
