import React from "react";
import { motion } from "framer-motion";
import { fonts, colors } from "../theme";

// Example blog data
const posts = [
  {
    id: 1,
    title: "2025 Real Estate Market Trends",
    excerpt: "Explore the latest trends in the premium real estate market and what to expect in the coming months.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Design Secrets of Luxury Homes",
    excerpt: "Discover how top architects are redefining home luxury with minimalism and smart technology.",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Why Location Still Matters",
    excerpt: "A deep dive into why location continues to be the #1 factor in property investment.",
    image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=600&q=80"
  }
];

const insights = [
  "Sustainable building is the future—expect more eco-luxe estates.",
  "Minimalism and technology are driving premium interior trends.",
  "Home automation is now a must-have for luxury buyers.",
];

export default function Blog() {
  return (
    <main style={{ padding: "3rem 2rem", background: colors.background }}>
      <h2
        style={{
          fontFamily: fonts.heading,
          fontSize: "2.5rem",
          marginBottom: "2rem",
          color: colors.primary,
          textAlign: "center"
        }}
      >
        Blog & Insights
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
          maxWidth: 1100,
          margin: "0 auto"
        }}
      >
        {posts.map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            whileHover={{
              scale: 1.035,
              boxShadow: "0 8px 40px rgba(0,0,0,0.12)"
            }}
            style={{
              background: "#fff",
              borderRadius: 22,
              overflow: "hidden",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              minHeight: 380
            }}
          >
            <img
              src={post.image}
              alt={post.title}
              style={{
                width: "100%",
                height: "170px",
                objectFit: "cover",
                borderTopLeftRadius: 22,
                borderTopRightRadius: 22
              }}
            />
            <div style={{ padding: "1.4rem" }}>
              <h3
                style={{
                  fontFamily: fonts.heading,
                  fontSize: "1.35rem",
                  margin: "0 0 1rem 0",
                  color: colors.primary
                }}
              >
                {post.title}
              </h3>
              <div
                style={{
                  fontFamily: fonts.body,
                  color: colors.textSecondary,
                  fontSize: "1.05rem"
                }}
              >
                {post.excerpt}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Insights section */}
      <section style={{ margin: "3.5rem auto 0 auto", maxWidth: 700 }}>
        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: fonts.heading,
            color: colors.primary,
            fontSize: "1.35rem",
            textAlign: "center",
            marginBottom: 16
          }}
        >
          Insights from the Premium Market
        </motion.h3>
        <ul style={{
          fontFamily: fonts.body,
          color: colors.textSecondary,
          fontSize: "1.09rem",
          margin: "0 auto",
          padding: "0 1rem"
        }}>
          {insights.map((insight, idx) => (
            <motion.li
              key={insight}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
              style={{
                marginBottom: 14
              }}
            >
              {insight}
            </motion.li>
          ))}
        </ul>
      </section>
    </main>
  );
}