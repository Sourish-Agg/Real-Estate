import React from "react";
import { motion } from "framer-motion";
import { fonts, colors } from "../theme";
import { Link } from "react-router-dom";

// Sample property data
const properties = [
  {
    id: 1,
    title: "Modern Villa in Beverly Hills",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    price: "$4,500,000",
    desc: "State-of-the-art amenities, infinity pool, and panoramic city views.",
  },
  {
    id: 2,
    title: "Penthouse in Manhattan",
    image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80",
    price: "$8,200,000",
    desc: "Skyline views, private elevator, and smart home technology.",
  },
  {
    id: 3,
    title: "Seaside Mansion",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    price: "$12,000,000",
    desc: "Private beach access, home theater, and luxury spa.",
  },
  {
    id: 4,
    title: "Eco-Luxe Retreat",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    price: "$3,950,000",
    desc: "Sustainable materials, solar power, and tranquil garden spaces.",
  }
];

export default function Properties() {
  return (
    <main style={{ padding: "3rem 2rem", background: colors.background }}>
      <h2
        style={{
          fontFamily: fonts.heading,
          fontSize: "2.7rem",
          marginBottom: "2rem",
          color: colors.primary,
          letterSpacing: "-0.5px",
          textAlign: "center",
        }}
      >
        Featured Properties
      </h2>
      <p style={{
        color: colors.textSecondary,
        fontFamily: fonts.body,
        fontSize: "1.13rem",
        textAlign: "center",
        maxWidth: 600,
        margin: "0 auto 2.5rem auto"
      }}>
        Explore our handpicked selection of premium homes. Each property is presented with smooth entrance and hover animations for an immersive browsing experience.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
          gap: "2.5rem",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {properties.map((property, idx) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 40px rgba(0,0,0,0.13)",
            }}
            style={{
              background: "#fff",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              transition: "box-shadow 0.2s",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              minHeight: 420,
            }}
          >
            <Link to={`/properties/${property.id}`}>
              <img
                src={property.image}
                alt={property.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderTopLeftRadius: 24,
                  borderTopRightRadius: 24,
                  transition: "filter 0.2s",
                }}
              />
              <div style={{ padding: "1.5rem" }}>
                <h3
                  style={{
                    fontFamily: fonts.heading,
                    fontSize: "1.5rem",
                    margin: "0 0 0.7rem 0",
                    color: colors.primary,
                  }}
                >
                  {property.title}
                </h3>
                <div
                  style={{
                    fontFamily: fonts.body,
                    fontWeight: 600,
                    color: colors.accent,
                    fontSize: "1.15rem",
                    marginBottom: 10
                  }}
                >
                  {property.price}
                </div>
                <div style={{
                  fontFamily: fonts.body,
                  color: colors.textSecondary,
                  fontSize: "1.05rem"
                }}>
                  {property.desc}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      {/* Quick filters (demo, non-functional) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
        style={{
          marginTop: "3.5rem",
          display: "flex",
          justifyContent: "center",
          gap: 16,
        }}
      >
        {["All", "Villas", "Penthouses", "Retreats", "Beachfront"].map(label => (
          <div
            key={label}
            style={{
              padding: "0.7rem 1.6rem",
              borderRadius: 18,
              background: "#f9f9fa",
              color: colors.textSecondary,
              fontFamily: fonts.body,
              fontWeight: 600,
              fontSize: "1.01rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              cursor: "pointer"
            }}
          >{label}</div>
        ))}
      </motion.div>
      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.6 }}
        style={{
          marginTop: "4rem",
          textAlign: "center"
        }}
      >
        <Link
          to="/contact"
          style={{
            display: "inline-block",
            padding: "1rem 2.5rem",
            background: colors.gold,
            color: colors.primary,
            borderRadius: 30,
            fontWeight: 700,
            fontSize: "1.12rem",
            fontFamily: fonts.body,
            boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
            marginTop: 10,
            transition: "background 0.2s, color 0.2s, box-shadow 0.2s"
          }}
        >
          Request a Private Tour
        </Link>
      </motion.div>
    </main>
  );
}