import { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaXmark } from "react-icons/fa6";

function Navbar() {
  const [isToggled, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!isToggled);
  }

  function closeMenu() {
    setToggle(false);
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.nav_con}>
          <a href="#home" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logo_mark}>JM</span>
            <span>
              <strong>My Portfolio</strong>
              <small>6740200412</small>
            </span>
          </a>
          <ul>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#stats">Stats</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <a className={styles.button} href="#contact">
            Hire Me
          </a>
          <button
            className={styles.bars}
            onClick={handleToggle}
            aria-label="Toggle menu"
            type="button"
          >
            {isToggled ? <FaXmark /> : <FaBars />}
          </button>
        </div>

        {isToggled ? (
          <div className={styles.mobile_panel}>
            <ul className={styles.mobile_menu}>
              <li>
                <a href="#skills" onClick={closeMenu}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={closeMenu}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#stats" onClick={closeMenu}>
                  Stats
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeMenu}>
                  Contact
                </a>
              </li>
            </ul>
            <a className={styles.mobile_button} href="#contact" onClick={closeMenu}>
              Hire Me
            </a>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
