import React from "react";
import toast, { Toaster } from "react-hot-toast";

const Donation = () => {
  const copyAddress = () => {
    const walletAddress = document.getElementById("walletAddress").innerText;
    navigator.clipboard
      .writeText(walletAddress)
      .then(() => {
        toast.success("Crypto wallet address copied to clipboard!", {
          position: "top-right",
          style: { marginTop: "40px" },
        });
      })
      .catch((err) => {
        toast.error("Failed to copy Crypto wallet address", {
          position: "top-right",
          style: { marginTop: "40px" },
        });
      });
  };

  return (
    <section className="container donation__container">
      <h1 className="donation__title">Support Us with Crypto Donations</h1>
      <p className="donation__description">
      Your support helps us continue providing valuable crypto signals and live rates. If you find our services helpful, please consider making a donation.
      </p>
      <h3 style={{marginTop: '1rem'}}>Donate via Bitcoin</h3>
      <p className="donation__description">
      You can donate to us using the following Bitcoin address:
      </p>
      <div className="wallet">
        <p className="wallet-label">BTC Address:</p>
        <p className="wallet-address" id="walletAddress">
          1A2b3C4d5E6f7G8h9I0jK1L2M3N4O5P6Q7R8S9T0U
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
