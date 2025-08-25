<<<<<<< HEAD
import React, { useState } from "react";
=======
/* import { useState, useEffect } from "react";
>>>>>>> 2388469cc4e9b69dae72e00f771295591eec4d75

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

<<<<<<< HEAD
  const handleLogin = async () => {
    const res = await fetch("http://localhost:5200/api/loginigaming", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include"  // <-- Important if backend sends cookies
    });
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("token", data.token);
      onLogin();
    } else {
      alert("Invalid credentials");
    }
=======
  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleYes = () => {
    window.location.href = "/offers"; 
>>>>>>> 2388469cc4e9b69dae72e00f771295591eec4d75
  };

  async function fetchHello() {
    try {
      const res = await fetch("http://localhost:5200/api/hello");
      const data = await res.json();
      console.log(data.message);
    } catch (err) {
      console.error("Error fetching:", err);
    }
  }
  
  fetchHello();
  
  

<<<<<<< HEAD
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl mb-4">Admin Login</h2>
      <input
        type="text"
        placeholder="Username"
        className="border p-2 mb-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
=======
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center w-80">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Are you 18+ or Above?
            </h2>
            <button
              onClick={handleYes}
              className="bg-green-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-green-700 transition"
            >
              Yes
            </button>
          </div>
        </div>
      )}
>>>>>>> 2388469cc4e9b69dae72e00f771295591eec4d75
    </div>
  );
} */


import { motion } from "framer-motion";
import { ShoppingBag, Gift, Smile, Star, Moon, Sun } from "lucide-react";
import { useState } from "react";
import CampaignPopup from "./CampaignPopup";

export default function FunSlotLanding() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
              <CampaignPopup />
          
    <div className={darkMode ? "dark bg-gray-900 text-gray-100" : "bg-gradient-to-br from-pink-100 via-white to-yellow-100 text-gray-800"}>
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-pink-600 dark:text-yellow-400">FunSlot</h1>
        <nav className="space-x-6 flex items-center">
          <a href="#features" className="hover:text-pink-600 dark:hover:text-yellow-400">Features</a>
          <a href="#categories" className="hover:text-pink-600 dark:hover:text-yellow-400">Categories</a>
          <a href="#testimonials" className="hover:text-pink-600 dark:hover:text-yellow-400">Testimonials</a>
          <a href="#shop" className="bg-pink-600 text-white px-4 py-2 rounded-xl shadow-md hover:bg-pink-700 transition dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-300">Shop Now</a>
          <button onClick={() => setDarkMode(!darkMode)} className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition">
            {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-pink-600 dark:text-yellow-400"
        >
          Shop with Fun 🎉
        </motion.h2>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          Welcome to <span className="font-semibold">FunSlot</span> — the place where shopping meets entertainment. Discover unique deals, enjoy rewards, and shop with a smile.
        </p>
        <motion.a
          href="#shop"
          whileHover={{ scale: 1.1 }}
          className="mt-8 inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-yellow-500 transition dark:bg-pink-600 dark:text-white dark:hover:bg-pink-500"
        >
          Start Shopping
        </motion.a>
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition bg-gradient-to-br from-pink-50 to-white dark:from-gray-700 dark:to-gray-800">
            <Smile className="mx-auto text-pink-500 w-12 h-12" />
            <h3 className="text-xl font-semibold mt-4">Fun Experience</h3>
            <p className="text-gray-600 mt-2 dark:text-gray-300">Shopping doesn’t have to be boring — enjoy every moment on FunSlot.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition bg-gradient-to-br from-yellow-50 to-white dark:from-gray-700 dark:to-gray-800">
            <Gift className="mx-auto text-yellow-500 w-12 h-12" />
            <h3 className="text-xl font-semibold mt-4">Exclusive Rewards</h3>
            <p className="text-gray-600 mt-2 dark:text-gray-300">Earn rewards and surprises as you shop your favorite items.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition bg-gradient-to-br from-green-50 to-white dark:from-gray-700 dark:to-gray-800">
            <ShoppingBag className="mx-auto text-green-500 w-12 h-12" />
            <h3 className="text-xl font-semibold mt-4">Trendy Products</h3>
            <p className="text-gray-600 mt-2 dark:text-gray-300">Find the latest trends and amazing deals curated just for you.</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-pink-600 dark:text-yellow-400">Shop by Category</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {["Fashion", "Electronics", "Home & Living", "Toys & Games"].map((cat) => (
            <motion.div
              key={cat}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-pink-100 to-yellow-100 text-center shadow-md hover:shadow-lg cursor-pointer dark:from-gray-700 dark:to-gray-800"
            >
              <h3 className="text-xl font-semibold">{cat}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-pink-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10 text-pink-600 dark:text-yellow-400">What Our Shoppers Say</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {["FunSlot makes shopping exciting! I love the rewards.", "The best shopping site ever! I found amazing deals."].map((quote, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-700"
            >
              <Star className="text-yellow-400 w-6 h-6 mb-2" />
              <p className="text-gray-700 italic dark:text-gray-300">“{quote}”</p>
              <span className="block mt-4 text-sm text-gray-500 dark:text-gray-400">– Happy Customer</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section id="shop" className="text-center py-20">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-yellow-400">Ready to Shop with Fun?</h2>
        <a
          href="#"
          className="mt-8 inline-block bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-pink-700 transition dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-300"
        >
          Explore Now
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-10 dark:bg-gray-950">
        <p>© {new Date().getFullYear()} FunSlot. Shop with Fun!</p>
      </footer>
    </div>
    </>
  );
}

