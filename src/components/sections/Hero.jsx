import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import ProfilePic from "../../assets/Profile.jpeg";

/* ------------------ Typewriter Hook ------------------ */
const useTypewriter = ({ words, typingSpeed = 90, deletingSpeed = 50, delay = 1500 }) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      setText(prev =>
        isDeleting ? currentWord.substring(0, prev.length - 1) : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

  return text;
};

/* ------------------ Three.js Floating Particles ------------------ */
const FloatingParticles = () => {
  const ref = useRef();

  // Create positions array only once
  const positions = useRef(new Float32Array(900 * 3).map(() => (Math.random() - 0.5) * 10));

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0004; // slower rotation
      ref.current.rotation.x += 0.0002;
    }
  });

  return (
    <Points ref={ref} positions={positions.current}>
      <PointMaterial transparent color="#ff4d4d" size={0.02} sizeAttenuation depthWrite={false} />
    </Points>
  );
};

/* ------------------ Hero ------------------ */
const Hero = () => {
  const name = useTypewriter({ words: ["Srikantha L"] });
  const role = useTypewriter({
    words: ["M.Tech Computer Science Engineer", "Full Stack Developer", "React & FastAPI Developer"],
    typingSpeed: 70,
    deletingSpeed: 40,
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-slate-950 overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <FloatingParticles />
        </Canvas>
      </div>

      {/* Floating Glass Shards */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_18px_rgba(255,0,0,0.15)]"
          style={{
            width: `${70 + i * 10}px`,
            height: `${40 + i * 6}px`,
            left: `${8 + i * 11}%`,
            top: `${12 + (i % 3) * 28}%`,
          }}
          animate={{
            y: [0, -15 - i, 0], // smaller smoother movement
            rotate: [0, i % 2 === 0 ? 5 : -5, 0],
          }}
          transition={{
            duration: 15 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Hi, I’m{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-red-400">
              {name}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl text-slate-400 h-8">
            {role}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-slate-300 max-w-xl leading-relaxed">
            M.Tech CSE 2nd Year student with hands-on experience in designing
            and developing scalable, modern web applications using React,
            Tailwind CSS, FastAPI, and MongoDB.
          </p>

          <div className="flex items-center gap-6">
            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-700 text-white font-medium shadow-[0_0_30px_rgba(255,0,80,0.55)]"
            >
              Download Resume
            </motion.a>

            <div className="flex gap-5 text-2xl text-slate-400">
              <a href="#" className="hover:text-red-500 transition">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-red-500 transition">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* Glow Behind Image */}
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-red-500/20 to-red-600/20 blur-3xl -z-10" />

          <motion.img
            src={ProfilePic}
            alt="Srikantha L"
            className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border-4 border-red-500 object-cover object-top shadow-[0_0_40px_rgba(255,0,80,0.65)]"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
