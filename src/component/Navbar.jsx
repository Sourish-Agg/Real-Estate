import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { colors, fonts } from "../theme";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Properties", path: "/properties" },
  { label: "Blog", path: "/blog" }, // NEW
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        background: colors.background,
        borderBottom: `1px solid ${colors.border}`,
        padding: "2rem 3rem 1rem 3rem",
        fontFamily: fonts.heading,
        fontWeight: 700,
        fontSize: 22,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <span style={{ color: colors.accent, fontWeight: 700, fontSize: 26 }}>
        Estate<span style={{ color: colors.primary }}>X</span>
      </span>
      <div>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              marginLeft: 32,
              color: pathname === link.path ? colors.accent : colors.textPrimary,
              borderBottom:
                pathname === link.path ? `2px solid ${colors.accent}` : "none",
              paddingBottom: 3,
              transition: "color 0.2s, border-bottom 0.2s",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}