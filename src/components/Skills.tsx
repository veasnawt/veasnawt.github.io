import { skillCategories } from "../data/skills";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="badge" style={{ marginBottom: "0.75rem" }}>
            Technical Expertise
          </div>
          <h2 className="section-title">Skills & Engineering Stack</h2>
          <p className="section-subtitle">
            Core technologies, architectural paradigms, and runtime environments utilized across web, game, and system projects.
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category) => (
            <div key={category.title} className={`card ${styles.categoryCard}`}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}</span>
                    </div>
                    <p className={styles.skillDesc}>{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
