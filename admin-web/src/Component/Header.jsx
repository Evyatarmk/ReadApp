import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose, MdHome, MdLibraryBooks, MdAdd } from "react-icons/md";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <header style={headerStyle}>
        <h1 style={{ margin: 0, fontSize: "1.5rem", color: "white" }}>
          📚 מערכת הטקסטים
        </h1>

        {/* כפתור המבורגר */}
        <button onClick={toggleDrawer} style={menuButtonStyle} aria-label="Toggle menu">
          {drawerOpen ? <MdClose size={28} color="white" /> : <MdMenu size={28} color="white" />}
        </button>
      </header>

      {/* מגירת צד */}
      <aside
        style={{
          ...drawerStyle,
          right: drawerOpen ? 0 : "-250px",
        }}
        onClick={() => setDrawerOpen(false)} // סגור בלחיצה על הרקע
      >
        <nav onClick={e => e.stopPropagation()} style={navStyle}>
          <Link to="/" style={linkStyle}>
            <MdHome size={20} style={{ marginRight: 8 }} />
            דף הבית
          </Link>
          <Link to="/Texts" style={linkStyle}>
            <MdLibraryBooks size={20} style={{ marginRight: 8 }} />
            טקסטים
          </Link>
          <Link to="/add" style={linkStyle}>
            <MdAdd size={20} style={{ marginRight: 8 }} />
            הוספה
          </Link>
        </nav>
      </aside>

      {/* רקע חצי שקוף כשהמגירה פתוחה */}
      {drawerOpen && <div style={backdropStyle} onClick={() => setDrawerOpen(false)} />}
    </>
  );
}

const headerStyle = {
  padding: "10px 20px",
  background: "#1976d2",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "fixed",
  top: 0,
  width: '100vw',
left: 0,
right: 0,
  zIndex: 1000,
  boxSizing: "border-box",
  height: 56,
};

const menuButtonStyle = {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const drawerStyle = {
  position: "fixed",
  top: 0,
  right: 0,
  height: "100vh",
  width: 250,
  backgroundColor: "#fff",
  boxShadow: "-2px 0 5px rgba(0,0,0,0.3)",
  paddingTop: 60,
  display: "flex",
  flexDirection: "column",
  transition: "right 0.3s ease-in-out",
  zIndex: 1100,
};

const navStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 20,
  paddingLeft: 20,
};

const linkStyle = {
  textDecoration: "none",
  color: "#1976d2",
  fontSize: 18,
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
};

const backdropStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.3)",
  zIndex: 1050,
};

export default Header;
