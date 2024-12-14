import React, { useState } from "react";
import "../index.css";

const SpinWheel = ({ onDiscountApply }) => {
    const [isSpinning, setIsSpinning] = useState(false);
    const [prize, setPrize] = useState(null);

    // Define prizes and their respective discount values
    const prizes = [
        { label: "10% Off", discount: 10 },
        { label: "20% Off", discount: 20 },
        { label: "No Prize", discount: 0 },
        { label: "50% Off", discount: 50 },
        { label: "Free Shipping", discount: 0 }, // Free shipping doesn't affect price
        { label: "5% Off", discount: 5 },
    ];

    const handleSpin = () => {
        if (isSpinning) return;

        setIsSpinning(true);

        // Randomly pick a prize
        const randomIndex = Math.floor(Math.random() * prizes.length);
        const selectedPrize = prizes[randomIndex];

        // Simulate spin animation (5 seconds)
        setTimeout(() => {
            setPrize(selectedPrize.label);
            setIsSpinning(false);

            // Notify parent about the discount if it's not "No Prize" or "Free Shipping"
            if (selectedPrize.discount > 0) {
                onDiscountApply(selectedPrize.discount);
            }
        }, 5000);
    };

    return (
        <>
            <div className="spin-wheel-container">
                <div className={`wheel ${isSpinning ? "spinning" : ""}`}>
                    {prizes.map((prize, index) => (
                        <div key={index} className="segment">
                            <span>{prize.label}</span>
                        </div>
                    ))}
                </div>
                <button onClick={handleSpin} disabled={isSpinning}>
                    {isSpinning ? "Spinning..." : "Spin the Wheel"}
                </button>
                {prize && <p className="result">You won: {prize}!</p>}
            </div>
            <div className="heading">
                <h3>Try Your luck! Using the spin wheel</h3>
            </div>
        </>
    );
};

export default SpinWheel;
