import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(true);
  const gold = '#D4AF37';
  const teal = '#008080';

  const sectionFadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
  const buttonHover = { scale: 1.05, transition: { type: 'spring', stiffness: 300 } };

  const bgGradient = darkMode
    ? `linear-gradient(135deg, #111827 0%, #1F2937 100%)`
    : `linear-gradient(135deg, ${teal} 0%, ${gold} 100%)`;
  const textColor = darkMode ? 'text-gray-100' : 'text-white';
  const sectionBg = darkMode ? 'bg-gray-800' : 'bg-gray-50';
  const cardBg = darkMode ? 'bg-gray-900' : 'bg-white';
  const cardText = darkMode ? 'text-gray-200' : 'text-gray-600';

  return (
    <div className={darkMode ? 'dark font-sans overflow-x-hidden' : 'font-sans overflow-x-hidden'}>
      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow"
          whileHover={{ scale: 1.1 }}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
      </div>

      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex flex-col items-center justify-center text-center px-4"
        style={{ background: bgGradient }}
        variants={sectionFadeIn}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src="/30 BUS Logo.png"
          alt="30 BUS Challenge Logo"
          className="w-32 h-32 mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360, transition: { duration: 1 } }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.8 } }}
        >
          <h1 className={`text-5xl md:text-6xl font-extrabold mb-4 ${textColor}`}>30 Day Build, Use, Sell Challenge</h1>
          <p className={`text-lg md:text-xl mb-8 ${textColor}`}>Hope on the 30 BUS To The Destination of Your Choice</p>
          <motion.a
            href="#tool-of-day"
            className="px-8 py-4 rounded-full font-semibold shadow-lg"
            style={{ backgroundColor: '#fff', color: teal }}
            whileHover={buttonHover}
          >
            Discover Tool of the Day
          </motion.a>
        </motion.div>
      </motion.section>

      <motion.section
        id="tool-of-day"
        className={`py-20 px-4 ${sectionBg}`}
        variants={sectionFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: teal }}>Tool of the Day</h2>
          <motion.div
            className={`${cardBg} shadow-2xl rounded-2xl p-8 hover:shadow-teal-400 transition-shadow`}
            whileHover={{ y: -8 }}
          >
            <h3 className="text-2xl font-semibold mb-4" style={{ color: darkMode ? '#fff' : '#333' }}>[Insert Tool Name]</h3>
            <p className={`mb-6 ${cardText}`}>Brief description of today’s featured AI tool. Explain how it helps accelerate your workflow.</p>
            <motion.a href="[Tool Link]" className="font-medium underline" whileHover={{ x: 4 }} style={{ color: teal }}>
              Learn More →
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
        variants={sectionFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: gold }}>Free 30-Day Bonus: ClickDone</h2>
          <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Get 30 days of free access to ClickDone, our AI-powered productivity suite for task automation.</p>
          <motion.a
            href="[ClickDone Link]"
            className="px-8 py-4 rounded-full font-semibold shadow-lg"
            style={{ backgroundColor: gold, color: '#fff' }}
            whileHover={buttonHover}
          >
            Claim Your Free Access
          </motion.a>
        </div>
      </motion.section>

      <motion.section
        className={`py-20 px-4 ${sectionBg}`}
        variants={sectionFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.a
            href="https://wa.me/1234567890"
            className="px-8 py-4 rounded-full font-semibold shadow-lg"
            style={{ backgroundColor: '#25D366', color: '#fff' }}
            whileHover={buttonHover}
          >
            Chat on WhatsApp
          </motion.a>
          <motion.a
            href="[Tally Form Link]"
            className="px-8 py-4 rounded-full font-semibold border-2 shadow-lg"
            style={{ borderColor: teal, color: teal }}
            whileHover={buttonHover}
          >
            Fill the Tally Form
          </motion.a>
        </div>
      </motion.section>

      <motion.section
        className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        variants={sectionFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: darkMode ? '#fff' : '#333' }}>Referral Link</h2>
          <p className={`mb-4 ${cardText}`}>Share the love and earn rewards! Use or share your unique referral link below.</p>
          <motion.div
            className="inline-block bg-gray-100 dark:bg-gray-700 px-6 py-3 rounded-full shadow-inner"
            whileHover={{ scale: 1.02 }}
          >
            <a href="[Your Referral Link]" className="font-medium" style={{ color: teal }}>
              [Your Referral Link]
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
