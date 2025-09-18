"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroAvatar() {
  const [open, setOpen] = useState(false);
  const [joke, setJoke] = useState("");

  const jokes = [
    "👻 Got you! No secrets here...",
    "🕳️ You really thought I’d hide something? 👀",
    "😂 404 Secret Not Found.",
    "🫣 Shhh… it’s empty in here.",
    "🧩 Guess you’ll have to hire me to unlock the real secret.",
    "🕵️ Nice try, detective. The vault is empty.",
  ];

  const toggleOpen = () => {
    if (!open) {
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
      setJoke(randomJoke);
    }
    setOpen(!open);
  };

  return (
    <div className="relative w-80 h-80">
      <AnimatePresence>
        {!open && (
          <motion.img
            key="full-avatar"
            src="/myavatar1.PNG"
            alt="Syed Yousaf Raza"
            className="w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-primary cursor-pointer"
            style={{ objectPosition: "center top" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleOpen}
          />
        )}

        {open && (
          <>
            {/* Left half */}
            <motion.div
              key="left-half"
              className="absolute top-0 left-0 w-1/2 h-full overflow-hidden rounded-l-full cursor-pointer"
              onClick={toggleOpen}
              initial={{ x: 0 }}
              animate={{ x: -180 }}
              exit={{ x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <img
                src="/myavatar1.PNG"
                alt="Syed Yousaf Raza Left"
                className="w-80 h-80 object-cover rounded-full"
                style={{ objectPosition: "left center" }}
              />
            </motion.div>

            {/* Right half */}
            <motion.div
              key="right-half"
              className="absolute top-0 right-0 w-1/2 h-full overflow-hidden rounded-r-full cursor-pointer"
              onClick={toggleOpen}
              initial={{ x: 0 }}
              animate={{ x: 180 }}
              exit={{ x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <img
                src="/myavatar1.PNG"
                alt="Syed Yousaf Raza Right"
                className="w-80 h-80 object-cover rounded-full"
                style={{ objectPosition: "right center" }}
              />
            </motion.div>

            {/* Secret text */}
            <motion.div
              key="secret"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-bold shadow-2xl p-6 text-center"
            >
              {joke}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
