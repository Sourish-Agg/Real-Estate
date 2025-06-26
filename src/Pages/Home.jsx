import React from "react";
import { motion } from "framer-motion";
import { colors, fonts } from "../theme";
import { Link } from "react-router-dom";
import Testimonials from "../component/Testimonials";

const features = [
  {
    title: "Curated Selection",
    desc: "Only the most exclusive properties, handpicked for quality and style.",
    icon: "🏆"
  },
  {
    title: "Immersive Visuals",
    desc: "Experience every property with cinematic imagery and smooth animations.",
    icon: "🎬"
  },
  {
    title: "Smooth Experience",
    desc: "Minimal navigation, elegant transitions, and delightful micro-interactions.",
    icon: "✨"
  }
];

export default function Home() {
  return (
    <main>

      <section
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "4rem 2rem 2rem 2rem",
          background: colors.background,
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontFamily: fonts.heading,
            fontSize: "3.5rem",
            margin: 0,
            letterSpacing: "-1px",
            color: colors.primary,
            textAlign: "center",
          }}
        >
          Live Premium.<br />Discover <span style={{ color: colors.accent }}>EstateX</span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.88, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          style={{
            fontFamily: fonts.body,
            fontSize: "1.35rem",
            color: colors.textSecondary,
            maxWidth: 560,
            margin: "2rem auto 0 auto",
            textAlign: "center",
          }}
        >
          Premium homes, elegant experiences, crafted for the modern lifestyle. Explore properties with immersive visuals and smooth, Apple-inspired animations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            to="/properties"
            style={{
              display: "inline-block",
              marginTop: "3rem",
              padding: "1rem 2.4rem",
              background: colors.accent,
              color: "#fff",
              borderRadius: 30,
              fontWeight: 600,
              fontSize: "1.1rem",
              boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
              fontFamily: fonts.body,
              transition: "background 0.2s, box-shadow 0.2s, color 0.2s",
            }}
            onMouseEnter={e => {
              e.target.style.background = colors.gold;
              e.target.style.color = colors.primary;
              e.target.style.boxShadow = "0 8px 32px rgba(212,175,55,0.13)";
            }}
            onMouseLeave={e => {
              e.target.style.background = colors.accent;
              e.target.style.color = "#fff";
              e.target.style.boxShadow = "0 6px 24px rgba(0,0,0,0.06)";
            }}
          >
            Explore Properties
          </Link>
        </motion.div>
      </section>

      {/* Value proposition/features */}
      <section style={{
        background: "#f9f9fa",
        padding: "3rem 0 1.5rem 0"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap",
          maxWidth: 1000,
          margin: "0 auto"
        }}>
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.18 }}
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: "2.2rem 2rem",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                minWidth: 260,
                maxWidth: 320,
                textAlign: "center",
                marginBottom: 24,
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 10 }}>{f.icon}</div>
              <div style={{
                fontFamily: fonts.heading,
                fontSize: "1.17rem",
                fontWeight: 700,
                color: colors.primary,
                marginBottom: 10
              }}>{f.title}</div>
              <div style={{
                fontFamily: fonts.body,
                color: colors.textSecondary,
                fontSize: "1.03rem"
              }}>{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      
      <section style={{
        margin: "4rem 0 0 0",
        padding: "0 2rem"
      }}>
        <h2 style={{
          fontFamily: fonts.heading,
          fontWeight: 700,
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "2.3rem",
          color: colors.primary
        }}>
          Experience Design Perfection
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          maxWidth: 1100,
          margin: "0 auto"
        }}>
          {[
            "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
          ].map((img, idx) => (
            <motion.div
              key={img}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.18 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 40px rgba(0,0,0,0.13)"
              }}
              style={{
                borderRadius: 20,
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                minHeight: 170
              }}
            >
              <img
                src={img}
                alt="Property"
                style={{ width: "100%", height: 170, objectFit: "cover", display: "block" }}
              />
            </motion.div>
          ))}
        </div>
      </section>
      <Testimonials />

      
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        style={{
          textAlign: "center",
          margin: "4rem 0 2rem 0"
        }}
      >
        <h2 style={{
          fontFamily: fonts.heading,
          fontSize: "1.8rem",
          color: colors.primary,
          marginBottom: 12
        }}>
          Industry insights, delivered
        </h2>
        <p style={{
          fontFamily: fonts.body,
          color: colors.textSecondary,
          fontSize: "1.09rem",
          margin: "0 auto 14px auto"
        }}>
          Learn about trends, technology and the future of premium real estate on our <Link to="/blog" style={{ color: colors.accent, fontWeight: 600 }}>blog</Link>.
        </p>
        <Link
          to="/blog"
          style={{
            display: "inline-block",
            padding: "1rem 2.2rem",
            background: colors.accent,
            color: "#fff",
            borderRadius: 30,
            fontWeight: 600,
            fontSize: "1.08rem",
            fontFamily: fonts.body,
            boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
            marginTop: 6,
            textDecoration: "none"
          }}
        >
          Go to Blog
        </Link>
      </motion.section>
    </main>
  );
}