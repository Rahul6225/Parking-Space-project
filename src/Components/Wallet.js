import React, { useState } from 'react';
import '../Styles/Wallet.css'

const Wallet = () => {
  const [amount, setAmount] = useState(0);

  const addAmount = () => {
    const value = parseFloat(prompt("Enter amount to add:"));
    if (!isNaN(value) && value > 0) {
      setAmount(prevAmount => prevAmount + value);
    } else {
      alert("Please enter a valid amount.");
    }
  };

  const subtractAmount = () => {
    const value = parseFloat(prompt("Enter amount to subtract:"));
    if (!isNaN(value) && value > 0 && value <= amount) {
      setAmount(prevAmount => prevAmount - value);
    } else {
      alert("Please enter a valid amount or ensure you have enough balance.");
    }
  };

  return (
    <div className="wallet-container">
      <h2>Wallet Balance</h2>
      <div className="balance">
        <h3>₹{amount.toFixed(2)}</h3>
      </div>
      <div className="buttons">
        <button onClick={addAmount}>Add Amount</button>
        <button onClick={subtractAmount}>Subtract Amount</button>
      </div>
    </div>
  );
};

export default Wallet;