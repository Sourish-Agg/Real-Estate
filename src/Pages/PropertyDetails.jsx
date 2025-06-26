import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { colors, fonts } from "../theme";


const propertyData = {
  1: {
    title: "Modern Villa in Beverly Hills",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    price: "$4,500,000",
    desc: "This elegant villa features state-of-the-art amenities and a panoramic view of Los Angeles.",
  },
  2: {
    title: "Penthouse in Manhattan",
    image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80",
    price: "$8,200,000",
    desc: "Experience luxury living in the heart of NYC, with stunning skyline views.",
  },
  3: {
    title: "Seaside Mansion",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    price: "$12,000,000",
    desc: "A grand mansion with private beach access and breathtaking ocean views.",
  },
};

export default function PropertyDetails() {
  const { id } = useParams();
  const property = propertyData[id];

  if (!property) return <p style={{ padding: 24 }}>Property not found.</p>;

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.7 }}
      style={{
        maxWidth: 900,
        margin: "3rem auto",
        background: "#fff",
        borderRadius: 28,
        boxShadow: "0 2px 16px rgba(0,0,0,0.09)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        minHeight: 430,
      }}
    >
      <img
        src={property.image}
        alt={property.title}
        style={{
          width: "44%",
          objectFit: "cover",
          minHeight: 320,
        }}
      />
      <div style={{ padding: "2.5rem", flex: 1 }}>
        <h2 style={{ fontFamily: fonts.heading, fontSize: "2.1rem", margin: 0, color: colors.primary }}>
          {property.title}
        </h2>
        <div style={{ fontFamily: fonts.body, fontWeight: 700, fontSize: "1.3rem", color: colors.accent, margin: "1rem 0" }}>
          {property.price}
        </div>
        <p style={{ fontFamily: fonts.body, color: colors.textSecondary, fontSize: "1.08rem", lineHeight: 1.7 }}>
          {property.desc}
        </p>
      </div>
    </motion.div>
  );
}