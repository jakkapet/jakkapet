import styles from "./Number.module.css";
import * as CountUpModule from "react-countup";
import { useInView } from "react-intersection-observer";

function resolveDefault(mod) {
  let m = mod;
  while (m && typeof m !== "function" && m.default) {
    m = m.default;
  }
  return m;
}
const CountUp = resolveDefault(CountUpModule);

function NumberItem({ end, label }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className={styles.number_items}>
      <h3>
        <div ref={ref}>
          {inView ? <CountUp start={0} end={end} duration={5} /> : 0}+
        </div>
      </h3>
      <p>{label}</p>
    </div>
  );
}

function Number() {
  const items = [
    { end: 12, label: "Projects Built" },
    { end: 8, label: "UI Experiments" },
    { end: 3, label: "Years Learning" },
    { end: 20, label: "Happy Teammates" },
  ];

  return (
    <section id="stats" className={styles.number_wrap}>
      <div className={styles.number_con}>
        {items.map((item) => (
          <NumberItem key={item.label} end={item.end} label={item.label} />
        ))}
      </div>
    </section>
  );
}

export default Number;
