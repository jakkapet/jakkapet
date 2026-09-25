import styles from "./Skills.module.css";
import { FaSquareJs, FaReact, FaSass, FaGitAlt, FaNode } from "react-icons/fa6";
import Tilt from "react-parallax-tilt";

const skills = [
  { icon: <FaSquareJs />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaSass />, name: "Sass" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaNode />, name: "Node.js" },
];

function Skills() {
  return (
    <section id="skills" className={styles.skills_con}>
      <div className={styles.inner}>
        <p className={styles.kicker}>What I use</p>
        <h3 className={styles.skills_title}>My Skill set</h3>
        <ul className={styles.skills_list}>
          {skills.map((skill) => (
            <li key={skill.name}>
              <Tilt scale={1.08} transitionSpeed={1800} tiltReverse={true}>
                <div className={styles.skill_card}>
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              </Tilt>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
