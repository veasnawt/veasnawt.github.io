"use client";

import { useState } from "react";
import { projects, Project } from "../data/projects";
import styles from "./Projects.module.css";

type CategoryFilter = "all" | "systems" | "games" | "web" | "tools";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  const getCategoryLabel = (category: Project["category"]) => {
    switch (category) {
      case "systems": return "Systems & OS";
      case "games": return "Game Engine";
      case "web": return "Web App";
      case "tools": return "Tooling";
    }
  };

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="badge" style={{ marginBottom: "0.75rem" }}>
            Portfolio Showcase
          </div>
          <h2 className="section-title">Engineered Projects & Systems</h2>
          <p className="section-subtitle">
            A selected collection of software architectures, interactive engines, desktop simulator environments, and modern web applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filterBar} role="tablist" aria-label="Filter projects by category">
          {(
            [
              { id: "all", label: "All Projects" },
              { id: "systems", label: "Systems & OS" },
              { id: "games", label: "Game Engines" },
              { id: "web", label: "Web Apps" },
              { id: "tools", label: "Tools" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === tab.id}
              className={`${styles.filterBtn} ${activeFilter === tab.id ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveFilter(tab.id)}
              id={`filter-tab-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <article
                key={project.id}
                className={`card ${styles.projectCard} ${project.featured ? styles.featuredCard : ""}`}
                id={`project-${project.id}`}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.cardMeta}>
                    <span className={`badge ${styles.categoryBadge}`}>
                      {getCategoryLabel(project.category)}
                    </span>
                    {project.featured && (
                      <span className={`badge ${styles.featuredBadge}`}>
                        Featured
                      </span>
                    )}
                  </div>
                  {project.metrics && (
                    <span className={styles.cardMetric}>
                      {project.metrics}
                    </span>
                  )}
                </div>

                <h3 className={styles.projectTitle}>{project.title}</h3>
                
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                {isExpanded && project.longDescription && (
                  <div className={styles.expandedContent}>
                    <p className={styles.longDesc}>{project.longDescription}</p>
                  </div>
                )}

                <div className={styles.tagsWrapper}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.techTag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  <button
                    type="button"
                    className={styles.expandToggle}
                    onClick={() => toggleExpand(project.id)}
                    aria-expanded={isExpanded}
                    id={`toggle-desc-${project.id}`}
                  >
                    <span>{isExpanded ? "Show Less" : "Details & Architecture"}</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`${styles.expandIcon} ${isExpanded ? styles.iconRotated : ""}`}
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  <div className={styles.actionButtons}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{ padding: "0.45rem 0.85rem", fontSize: "0.8125rem" }}
                      id={`github-link-${project.id}`}
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        />
                      </svg>
                      <span>Code</span>
                    </a>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ padding: "0.45rem 0.85rem", fontSize: "0.8125rem" }}
                        id={`demo-link-${project.id}`}
                        aria-label={`View Live Demo of ${project.title}`}
                      >
                        <span>Demo</span>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
