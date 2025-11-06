    import { useState, useEffect, useRef } from "react";
    import "./ClickGerm.css";

    const GOAL = 10;
    const SEC_BETWEEN_APPEAR_MIN = 1000;
    const SEC_BETWEEN_APPEAR_MAX = 2000;
    const GERM_LIFE = 1500;

    export default function ClickGerm() {
    const [germs, setGerms] = useState([]);
    const [clickCount, setClickCount] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [winMessage, setWinMessage] = useState(false);

    const timeoutRef = useRef(null);


    // Generate random position on either the left or right side area
    const getPosition = () => {
        const side = Math.random() < 0.5 ? 'left' : 'right'; // pick which side
        const top = Math.random() * 90 + 5 + "%"; // random vertical position

        // define horizontal ranges:
        // left side = 0–40%, right side = 60–100%
        const left = side === 'left'
            ? (Math.random() * 30) + "%"      // anywhere between 0%–40%
            : (Math.random() * 30 + 70) + "%"; // anywhere between 60%–100%

        return { top, left };
    };


    // Create a new germ
    const spawnGerm = () => {
        if (gameOver) return;

        const id = Date.now() + Math.random();
        const newGerm = { id, ...getPosition() };

        setGerms((prev) => [...prev, newGerm]);

        // Remove germ after its life ends
        setTimeout(() => {
        setGerms((prev) => prev.filter((g) => g.id !== id));
        }, GERM_LIFE);
    };

    // Spawn germs at random intervals
    const spawnRandomGerms = () => {
        if (gameOver) return;

        const interval =
        Math.random() * (SEC_BETWEEN_APPEAR_MAX - SEC_BETWEEN_APPEAR_MIN) +
        SEC_BETWEEN_APPEAR_MIN;

        timeoutRef.current = setTimeout(() => {
        spawnGerm();
        spawnRandomGerms();
        }, interval);
    };

    useEffect(() => {
        spawnRandomGerms();
        return () => clearTimeout(timeoutRef.current);
    }, []);

    useEffect(() => {
        if (gameOver) {
        clearTimeout(timeoutRef.current);
        setGerms([]);
        setWinMessage(true);
        const timer = setTimeout(() => setWinMessage(false), 2000);
        return () => clearTimeout(timer);
        }
    }, [gameOver]);

    const handleClick = (id) => {
        setGerms((prev) => prev.filter((g) => g.id !== id));
        setClickCount((prev) => {
        const newCount = prev + 1;
        if (newCount >= GOAL) setGameOver(true);
        return newCount;
        });
    };

    return (
        <div className="game-container">
        {germs.map((g) => (
            <div
            key={g.id}
            className="germ"
            style={{ top: g.top, left: g.left }}
            onClick={() => handleClick(g.id)}
            >
            🦠
            </div>
        ))}

        {winMessage && (
            <div className="win-message">
            🎉 You killed {GOAL} germs to get away from flu! 🎉
            </div>
        )}

        </div>
    );
}
