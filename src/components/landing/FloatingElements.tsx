"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const coins = [
    { symbol: "BTC", color: "bg-orange-500" },
    { symbol: "ETH", color: "bg-blue-500" },
    { symbol: "SOL", color: "bg-green-500" },
    { symbol: "XRP", color: "bg-gray-800" },
    { symbol: "ADA", color: "bg-blue-600" },
    { symbol: "TRX", color: "bg-red-500" },
];

const memes = ["🚀", "💎", "🌙", "🐕", "🐸"];

export function FloatingElements() {
    const [elements, setElements] = useState<any[]>([]);

    useEffect(() => {
        // This check ensures this code only runs on the client
        if (typeof window === 'undefined') {
            return;
        }

        // Generate random positions for coins and memes
        const newElements = [
            ...coins.map((coin, i) => ({
                id: `coin-${i}`,
                type: "coin",
                content: coin.symbol,
                color: coin.color,
                x: Math.random() * 100,
                y: Math.random() * 100,
                duration: 10 + Math.random() * 20,
                delay: Math.random() * 5,
            })),
            ...memes.map((meme, i) => ({
                id: `meme-${i}`,
                type: "meme",
                content: meme,
                x: Math.random() * 100,
                y: Math.random() * 100,
                duration: 15 + Math.random() * 20,
                delay: Math.random() * 5,
            })),
        ];
        setElements(newElements);
    }, []);

    if (!elements.length) {
        return null;
    }

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    className={`absolute flex items-center justify-center rounded-full shadow-lg backdrop-blur-sm
            ${el.type === "coin" ? `${el.color} text-white font-bold w-12 h-12 md:w-16 md:h-16 opacity-20` : "text-2xl md:text-4xl opacity-30"}
          `}
                    initial={{ x: `${el.x}vw`, y: `${el.y}vh` }}
                    animate={{
                        y: ["110vh", "-10vh"],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: el.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: el.delay,
                    }}
                >
                    {el.content}
                </motion.div>
            ))}
        </div>
    );
}
