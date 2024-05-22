'use client';
import React, { useState } from 'react';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.burger} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
        <li><a href="/">Home</a></li>
        <li className={styles.dropdown}>
          <a href="#repairs" className={styles.dropdownToggle}>Repairs</a>
          <ul className={styles.dropdownMenu}>
            <li><a href="#repair1">Repair 1</a></li>
            <li><a href="#repair2">Repair 2</a></li>
            <li><a href="#repair3">Repair 3</a></li>
          </ul>
        </li>
        <li><a href="/locations">Locations</a></li>
        <li><a href="#about">About us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li className={styles.dropdown}>
          <a href="#join" className={styles.dropdownToggle}>Join us</a>
          <ul className={styles.dropdownMenu}>
            <li><a href="#join1">Join 1</a></li>
            <li><a href="#join2">Join 2</a></li>
            <li><a href="#join3">Join 3</a></li>
          </ul>
        </li>
      </ul>
      <div className={styles.navActions}>
        <button className={styles.repairButton}>Start a Repair</button>
        <a href="tel:+18779664349" className={styles.phoneNumber}>
          <img src="/phone.svg" alt="Phone icon" />
          <span>+1 (877) 966 4349</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
