import styles from "./Hero.module.css";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

function Hero() {
  return (
    <section id="home" className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <p className={styles.badge}>My Portfolio · 6740200412</p>
            <p className={styles.text_1}>Hi, it's me</p>
            <h1 className={styles.text_2}>Jakkapet Madming-ngao</h1>
            <p className={styles.text_3}>
              <span>I'm a</span>
              <TypeAnimation
                sequence={[
                  "Front-end Developer",
                  1400,
                  "Web Developer",
                  1400,
                  "UI Designer",
                  1400,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </p>
            <p className={styles.text_4}>
              สร้างเว็บที่ดูสะอาด ไหลลื่น และใช้งานง่าย — จากไอเดียสู่หน้าจอ
              ด้วย React, CSS ที่คิดมาแล้ว และรายละเอียดเล็ก ๆ ที่ทำให้ผลงานดูเป็นมืออาชีพ
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href="#portfolio">
                ดูผลงาน
              </a>
              <a className={styles.ghost} href="#contact">
                ติดต่อฉัน
              </a>
            </div>
            <ul className={styles.hero_social}>
              <li>
                <a href="#" aria-label="GitHub">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Facebook">
                  <FaFacebookF />
                </a>
              </li>
            </ul>
          </div>
          <Tilt scale={1.05} transitionSpeed={1800} tiltReverse={true} glareEnable glareMaxOpacity={0.18} glareColor="#ffffff" glarePosition="all">
            <div className={styles.hero_card}>
              <div className={styles.hero_img}></div>
              <div className={styles.hero_meta}>
                <strong>Jakkapet Madming-ngao</strong>
                <span>Student ID 6740200412</span>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}

export default Hero;
