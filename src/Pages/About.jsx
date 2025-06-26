import React from "react";
import { motion } from "framer-motion";
import { colors, fonts } from "../theme";

const values = [
  {
    label: "Attention to Detail",
    desc: "Every pixel, every interaction, every property listing is crafted with care."
  },
  {
    label: "Premium Service",
    desc: "We believe in white-glove support and a seamless journey for every client."
  },
  {
    label: "Innovation",
    desc: "We’re inspired by world-class design and technology, always improving."
  }
];

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{
        maxWidth: 700,
        margin: "4rem auto",
        padding: "3rem",
        borderRadius: 24,
        background: "#fff",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
    >
      <h2 style={{ fontFamily: fonts.heading, fontSize: "2rem", color: colors.primary, margin: 0 }}>
        About Us
      </h2>
      <p style={{ fontFamily: fonts.body, color: colors.textSecondary, fontSize: "1.15rem", marginTop: 24, marginBottom: 28 }}>
        EstateX is dedicated to redefining the premium real estate experience. Inspired by Apple’s design excellence, we believe in elegance, clarity, and flawless animation. Our handpicked properties and minimal UI ensure a premium journey for every visitor.
      </p>
      <div>
        {values.map((v, idx) => (
          <motion.div
            key={v.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.13 }}
            style={{
              background: "#f9f9fa",
              borderRadius: 14,
              padding: "1.2rem 1.1rem",
              marginBottom: 15
            }}
          >
            <div style={{
              fontFamily: fonts.heading,
              fontWeight: 600,
              fontSize: "1.12rem",
              color: colors.accent,
              marginBottom: 6
            }}>{v.label}</div>
            <div style={{
              fontFamily: fonts.body,
              color: colors.textSecondary,
              fontSize: "1.02rem"
            }}>{v.desc}</div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.45 }}
        style={{
          marginTop: 32,
          textAlign: "center"
        }}
      >
        <span style={{
          color: colors.primary,
          fontFamily: fonts.heading,
          fontWeight: 700,
          fontSize: "1.18rem"
        }}>
          “Design is not just what it looks like and feels like. Design is how it works.” — Steve Jobs
        </span>
      </motion.div>
    </motion.section>
  );
}