import React, { useState } from "react";
import BackImg from "../assest/3.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    const token = localStorage.getItem("token"); // Check if token is in localStorage

    if (token) {
      navigate("/game", { state: { startNewGame: true } }); // Redirect to the game if logged in
    } else {
      navigate("/login"); // Redirect to login if no token found
    }
  };

  return (
    <div>
      <div
        className="flex items-center justify-center min-h-screen p-4"
        style={{
          backgroundImage: `url(${BackImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col text-white p-4 rounded-lg space-y-16 ">
          <h1
            className="text-5xl font-bold text-center my-4"
            style={{
              fontFamily: "cursive",
              textDecoration: "none",
            }}
          >
            Welcome to Kera 🍌
          </h1>

          <div className="flex flex-col md:flex-row p-16 shadow-[#6d325c] shadow-xl hover:drop-shadow-2xl rounded-lg overflow-hidden bg-[#fadcd5] w-full max-w-lg">
            <button
              type="submit"
              className="w-full mb-4 bg-gray-800 text-white py-2 rounded-lg hover:bg-[#011222] transition duration-300"
              onClick={handleStartClick}
            >
              Start New Game 🍌
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
