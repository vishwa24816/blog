
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const coins = [
    { symbol: "BTC", color: "bg-orange-500" },
    { symbol: "ETH", color: "bg-gray-400" },
    { symbol: "USDT", color: "bg-green-500" },
    { symbol: "XRP", color: "bg-blue-300" },
    { symbol: "BNB", color: "bg-yellow-500" },
    { symbol: "USDC", color: "bg-blue-500" },
    { symbol: "SOL", color: "bg-purple-500" },
    { symbol: "TRX", color: "bg-red-600" },
    { symbol: "STETH", color: "bg-blue-400" },
    { symbol: "DOGE", color: "bg-yellow-400" },
    { symbol: "ADA", color: "bg-blue-700" },
    { symbol: "USDE", color: "bg-green-300" },
    { symbol: "HYPE", color: "bg-pink-500" },
    { symbol: "WBTC", color: "bg-orange-400" },
    { symbol: "BCH", color: "bg-green-600" },
    { symbol: "WBETH", color: "bg-gray-500" },
    { symbol: "WETH", color: "bg-gray-600" },
    { symbol: "ZEC", color: "bg-yellow-600" },
    { symbol: "LINK", color: "bg-blue-800" },
    { symbol: "XLM", color: "bg-gray-300" },
    { symbol: "LTC", color: "bg-gray-400" },
    { symbol: "XMR", color: "bg-orange-600" },
    { symbol: "sUSDE", color: "bg-green-400" },
    { symbol: "AVAX", color: "bg-red-500" },
    { symbol: "HBAR", color: "bg-gray-700" },
    { symbol: "DAI", color: "bg-yellow-300" },
    { symbol: "SUI", color: "bg-blue-400" },
    { symbol: "SHIB", color: "bg-orange-300" },
    { symbol: "UNI", color: "bg-pink-400" },
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
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    className={`absolute flex items-center justify-center rounded-full shadow-lg backdrop-blur-sm -z-10
            ${el.type === "coin" ? `${el.color} text-white font-bold w-12 h-12 md:w-16 md:h-16 opacity-60` : "text-2xl md:text-4xl opacity-60"}
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
