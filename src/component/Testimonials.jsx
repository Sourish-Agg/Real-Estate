import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { fonts, colors } from "../theme";

const testimonials = [
  {
    name: "Ava Lee",
    text: "EstateX made my dream home a reality. The experience was seamless, elegant, and truly premium.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "David Kim",
    text: "The property viewing felt like a tour through an Apple store — clean, modern, and inspiring.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sophia Turner",
    text: "I was amazed by the attention to detail and smooth transitions on the website. 5 stars!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  function next() {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }
  function prev() {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }

  return (
    <section style={{
      margin: "5rem auto 3rem auto",
      maxWidth: 600,
      background: "#fff",
      borderRadius: 24,
      boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
      padding: "3rem 2rem 2rem 2rem",
      textAlign: "center"
    }}>
      <h3 style={{
        fontFamily: fonts.heading,
        fontSize: "1.7rem",
        marginBottom: "2.5rem",
        color: colors.primary,
        letterSpacing: "-1px"
      }}>What our clients say</h3>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={testimonials[current].avatar}
            alt={testimonials[current].name}
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: 16,
              border: `2px solid ${colors.accent}`
            }}
          />
          <p style={{
            fontFamily: fonts.body,
            fontStyle: "italic",
            color: colors.textSecondary,
            fontSize: "1.13rem",
            marginBottom: 18,
            minHeight: 50
          }}>
            “{testimonials[current].text}”
          </p>
          <div style={{
            fontWeight: 700,
            fontFamily: fonts.heading,
            color: colors.accent
          }}>
            — {testimonials[current].name}
          </div>
        </motion.div>
      </AnimatePresence>
      <div style={{ marginTop: 22, display: "flex", justifyContent: "center", gap: 16 }}>
        <button onClick={prev}
          style={{
            background: colors.background,
            border: `1px solid ${colors.border}`,
            borderRadius: "50%",
            width: 36,
            height: 36,
            cursor: "pointer",
            color: colors.primary,
            fontSize: 18
          }}>&lt;</button>
        <button onClick={next}
          style={{
            background: colors.background,
            border: `1px solid ${colors.border}`,
            borderRadius: "50%",
            width: 36,
            height: 36,
            cursor: "pointer",
            color: colors.primary,
            fontSize: 18
          }}>&gt;</button>
      </div>
    </section>
  );
}