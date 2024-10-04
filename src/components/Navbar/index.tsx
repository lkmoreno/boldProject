// src/components/Navbar.tsx
import React from "react";
import styles from './navbar.module.scss';  
import { IoIosHelpCircleOutline } from "react-icons/io";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <img src="src/assets/logo.png" alt="Logo" className={styles.logo} />
      <div className={styles.textContainer}>
        <span className={styles.text}>Mi negocio</span>
        <span className={styles.text}>Ayuda</span>
        <span className={styles.text}> <IoIosHelpCircleOutline /></span>
      </div>
    </nav>
  );
};

export default Navbar;
