import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<any[]>([]);

  useEffect(() => {
    const pageHeight = document.body.scrollHeight;
    const numberOfHearts = 20; // increase/decrease amount here

    const generatedHearts = Array.from({ length: numberOfHearts }).map(
      (_, i) => ({
        id: i,
        top: Math.random() * pageHeight,
        left: Math.random() * 100,
        size: 70 + Math.random() * 60,
        duration: 8 + Math.random() * 6,
      })
    );

    setHearts(generatedHearts);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            top: heart.top,
            left: `${heart.left}%`,
            width: heart.size,
            height: heart.size,
            opacity: 0.45,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [-8, 8, -8],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-full h-full"
            style={{
              filter:
                "drop-shadow(0 0 25px rgba(192,192,192,0.9)) drop-shadow(0 0 40px rgba(0,150,255,0.8))",
            }}
          >
            <defs>
              <radialGradient id={`silverBlue${heart.id}`}>
                <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                <stop offset="30%" stopColor="rgba(230,230,230,0.95)" />
                <stop offset="60%" stopColor="rgba(0,170,255,0.9)" />
                <stop offset="100%" stopColor="rgba(0,80,200,0.8)" />
              </radialGradient>
            </defs>

            <path
              d="M12 21s-6-4.35-9-8.28C-1 7.5 2.42 3 6 3c2.54 0 4 1.66 6 4 2-2.34 3.46-4 6-4 3.58 0 7 4.5 3 9.72C18 16.65 12 21 12 21z"
              fill={`url(#silverBlue${heart.id})`}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;