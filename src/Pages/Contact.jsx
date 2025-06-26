import React from "react";
import { motion } from "framer-motion";
import { colors, fonts } from "../theme";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{
        maxWidth: 600,
        margin: "4rem auto",
        padding: "3rem",
        borderRadius: 24,
        background: "#fff",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
      }}
    >
      <h2 style={{ fontFamily: fonts.heading, fontSize: "2rem", color: colors.primary, margin: 0 }}>
        Contact Us
      </h2>
      <p style={{ fontFamily: fonts.body, color: colors.textSecondary, fontSize: "1.13rem", margin: "1.2rem 0" }}>
        Have a question or want a private tour? Our team is here for you.
      </p>
      <form style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 18 }}>
        <motion.input
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: fonts.body,
            padding: "1rem",
            fontSize: 16,
            borderRadius: 12,
            border: `1px solid ${colors.border}`,
            marginBottom: 10,
          }}
          type="text"
          placeholder="Your Name"
        />
        <motion.input
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontFamily: fonts.body,
            padding: "1rem",
            fontSize: 16,
            borderRadius: 12,
            border: `1px solid ${colors.border}`,
            marginBottom: 10,
          }}
          type="email"
          placeholder="Your Email"
        />
        <motion.textarea
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontFamily: fonts.body,
            padding: "1rem",
            fontSize: 16,
            borderRadius: 12,
            border: `1px solid ${colors.border}`,
            minHeight: 80,
            marginBottom: 10,
            resize: "vertical"
          }}
          placeholder="Your Message"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.03, background: colors.gold, color: colors.primary }}
          style={{
            fontFamily: fonts.body,
            fontWeight: 600,
            fontSize: 17,
            padding: "1rem",
            borderRadius: 12,
            background: colors.accent,
            color: "#fff",
            border: "none",
            cursor: "pointer",
            transition: "background 0.23s",
          }}
        >
          Send Message
        </motion.button>
      </form>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.22 }}
        style={{
          marginTop: 32,
          textAlign: "center"
        }}
      >
        <span style={{
          color: colors.textSecondary,
          fontFamily: fonts.body,
          fontSize: "1.03rem"
        }}>
          Or email us at <a href="mailto:hello@estatex.com" style={{ color: colors.accent }}>hello@estatex.com</a>
        </span>
      </motion.div>
    </motion.section>
  );
}