import React from "react";
import toast, { Toaster } from 'react-hot-toast';

const Donation = () => {
    const copyAddress = () => {
        const walletAddress = document.getElementById('walletAddress').innerText;
        navigator.clipboard.writeText(walletAddress).then(() => {
            toast.success('Crypto wallet address copied to clipboard!', {position: 'top-right', style: {marginTop: '40px'}});
        }).catch(err => {
            toast.error('Failed to copy Crypto wallet address', {position: 'top-right', style: {marginTop: '40px'}});
        });
    };
      
  return (
    <section className="container donation__container">
      <h1 className="donation__title">Support Us with Crypto Donations</h1>
      <p className="donation__description">
        Your support helps us continue our work. Any contribution is greatly
        appreciated!
      </p>
      <div className="wallet">
        <p className="wallet-label">Crypto Wallet Address:</p>
        <p className="wallet-address" id="walletAddress">
          3K98G85hzT7Wy9sDQ96R6CZ5PiD1CpLXf1
        </p>
        <button className="copy-button" onClick={copyAddress}>
          Copy Address
        </button>
      </div>
      <Toaster /> 
    </section>
  );
};

export default Donation;
