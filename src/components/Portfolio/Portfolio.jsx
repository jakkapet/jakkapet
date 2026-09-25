import styles from "./Portfolio.module.css";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "Campus Dashboard",
    tag: "React UI",
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Code Studio",
    tag: "Front-end",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Learning Lab",
    tag: "Web App",
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Dev Workspace",
    tag: "UI Design",
    src: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Brand Landing",
    tag: "Responsive",
    src: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Product Launch",
    tag: "Animation",
    src: "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=1200&auto=format&fit=crop",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className={styles.port_con}>
      <p className={styles.kicker}>Selected work</p>
      <h3 className={styles.port_title}>Portfolio</h3>
      <p className={styles.subtitle}>ผลงานของ Jakkapet Madming-ngao</p>
      <div className={styles.port_list}>
        {projects.map((project) => (
          <article className={styles.port_items} key={project.title}>
            <Tilt scale={1.04} transitionSpeed={1800} tiltReverse={true}>
              <div className={styles.card}>
                <img src={project.src} alt={project.title} />
                <div className={styles.overlay}>
                  <span>{project.tag}</span>
                  <h4>{project.title}</h4>
                </div>
              </div>
            </Tilt>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
