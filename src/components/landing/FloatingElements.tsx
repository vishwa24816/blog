
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const coins = [
    { symbol: "BTC", color: "bg-orange-500" },
    { symbol: "ETH", color: "bg-gray-400" },
    { symbol: "USDT", color: "bg-green-500" },
    { symbol: "BNB", color: "bg-yellow-500" },
    { symbol: "SOL", color: "bg-purple-500" },
];

const memes = ["🚀", "💎", "🌙", "🐕", "🐸", "📈", "💰", "🔥", "😎", "🤑", "💡", "🎯", "🤖", "🐂", "🐻", '📉', '💸', '₿', '🏦', '₿', '🧑‍💻', '👨‍🏫', '🤯', '🤔', '👨‍🚀', '💥', '🎉', '🥂', '🍿', '🥤', '🍔', '🍕'];

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
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    className={`absolute flex items-center justify-center rounded-full shadow-lg backdrop-blur-sm -z-10
            ${el.type === "coin" ? `${el.color} text-white font-bold w-16 h-16 md:w-24 md:h-24 opacity-60` : "text-4xl md:text-6xl opacity-60"}
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
