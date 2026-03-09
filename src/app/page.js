import styles from "./page.module.css";

const projects = [
  {
    title: "TurboList",
    description:
      "Mobile app for eBay sellers to create bulk listings faster with a streamlined flow for drafting, organizing, and publishing inventory.",
    technologies: ["React Native", "JavaScript", "Mobile UX"],
  },
  {
    title: "Vine Disease Detection",
    description:
      "Machine learning project focused on detecting plant disease from vine imagery using convolutional neural network models.",
    technologies: ["Python", "TensorFlow", "CNN"],
  },
  {
    title: "Barbershop Website",
    description:
      "Modern React website for a family business with a polished visual identity, service information, and a mobile-friendly customer journey.",
    technologies: ["React", "CSS", "Responsive Design"],
  },
  {
    title: "Auction Data Research",
    description:
      "Research project analysing UK auction car data to identify pricing patterns, market trends, and opportunities for deeper insights.",
    technologies: ["Python", "Data Analysis", "Pandas"],
  },
];

const skillGroups = [
  {
    category: "Languages",
    icon: "</>",
    items: ["Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks",
    icon: "[ ]",
    items: ["React", "React Native", "Next.js", "Node.js"],
  },
  {
    category: "Technologies",
    icon: "{ }",
    items: ["Machine Learning", "APIs", "Git / GitHub", "PostgreSQL"],
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} id="top">
        <div className={styles.heroBackdrop} aria-hidden="true">
          <span className={styles.glowOrb} />
          <span className={styles.gridLines} />
          <span className={styles.codeRing} />
          <div className={styles.techCluster}>
            <span className={`${styles.techShape} ${styles.techCube}`} />
            <span className={`${styles.techShape} ${styles.techPlate}`} />
            <span className={`${styles.techShape} ${styles.techPrism}`} />
          </div>
        </div>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Software Developer</p>
          <h1>Evan Babaker</h1>
          <p className={styles.heroTitle}>Building useful software with clean systems and modern tools.</p>
          <p className={styles.lead}>
            I am passionate about building software tools, exploring new
            technologies, and turning ideas into practical products that are
            fast, usable, and easy to maintain.
          </p>
          <div className={styles.heroMeta}>
            <span className={styles.metaPill}>First Class CS Graduate</span>
            <span className={styles.metaPill}>Open to Opportunities</span>
            <span className={styles.metaPill}>Based in the UK</span>
          </div>
          <div className={styles.heroActions}>
            <a className={styles.primaryAction} href="#projects">
              View Projects
            </a>
            <a
              className={styles.secondaryAction}
              href="https://github.com/evanbabaker"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
        <aside className={styles.heroCard}>
          <span className={styles.cardLabel}>Current Mindset</span>
          <ul>
            <li>Shipping software that solves real workflow problems</li>
            <li>Learning new technologies by building practical projects</li>
            <li>Balancing clean UI with maintainable engineering decisions</li>
          </ul>
        </aside>
      </section>

      <section className={styles.section} id="about">
        <div className={styles.sectionHeading}>
          <p>About</p>
          <h2>First class Computer Science graduate with a practical, curious approach to building software.</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            I am a first class Computer Science graduate with a strong interest
            in software engineering, machine learning, data driven
            applications, and building real world tools that solve meaningful
            problems.
          </p>
          <p>
            I enjoy exploring new ideas through project based learning, using
            curiosity and problem solving to turn technical concepts into
            practical software. My goal is to keep improving through hands-on
            development and to build systems that are both useful and well
            engineered.
          </p>
        </div>
      </section>

      <section className={styles.section} id="projects">
        <div className={styles.sectionHeading}>
          <p>Featured Projects</p>
          <h2>Selected work that reflects technical depth and product-minded execution.</h2>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <article className={styles.projectCard} key={project.title}>
              <div className={styles.projectCardHeader}>
                <span className={styles.projectIndex}>0{index + 1}</span>
                <h3>{project.title}</h3>
              </div>
              <p>{project.description}</p>
              <div className={styles.projectTags}>
                {project.technologies.map((technology) => (
                  <span className={styles.projectTag} key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="skills">
        <div className={styles.sectionHeading}>
          <p>Skills</p>
          <h2>Technologies I use to design, build, and ship modern applications.</h2>
        </div>
        <div className={styles.skillsGrid}>
          {skillGroups.map((group) => (
            <article className={styles.skillGroupCard} key={group.category}>
              <div className={styles.skillGroupHeader}>
                <span className={styles.skillIcon} aria-hidden="true">
                  {group.icon}
                </span>
                <h3>{group.category}</h3>
              </div>
              <div className={styles.skillsList}>
                {group.items.map((skill) => (
                  <span className={styles.skillChip} key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="focus">
        <div className={styles.sectionHeading}>
          <p>Current Work</p>
          <h2>Focused on modern web engineering and stronger developer workflows.</h2>
        </div>
        <div className={styles.focusGrid}>
          <article className={styles.projectCard}>
            <h3>Frontend Systems</h3>
            <p>
              Building polished interfaces with responsive layouts, reusable
              components, and maintainable styling patterns.
            </p>
          </article>
          <article className={styles.projectCard}>
            <h3>Full-Stack Growth</h3>
            <p>
              Expanding across APIs, backend logic, and data-driven features to
              deliver complete product experiences.
            </p>
          </article>
          <article className={styles.projectCard}>
            <h3>Career-Ready Delivery</h3>
            <p>
              Sharpening project presentation, code quality, and collaboration
              practices for recruiter and team-facing work.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.contactSection} id="contact">
        <div className={styles.contactContent}>
          <p className={styles.contactLabel}>Contact</p>
          <h2>Interested in collaborating, hiring, or discussing new opportunities?</h2>
          <p className={styles.contactCopy}>
            I am always open to thoughtful collaborations, software roles, and
            conversations about useful products. Reach out through GitHub,
            LinkedIn, or email.
          </p>
        </div>
        <div className={styles.contactLinks}>
          <a
            className={styles.contactLink}
            href="https://github.com/evanbabaker"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className={styles.contactLink}
            href="https://www.linkedin.com/in/evanbabaker"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            aria-label="Email evanbabaker.dev@gmail.com"
            className={styles.contactLink}
            href="mailto:evanbabaker.dev@gmail.com"
            title="evanbabaker.dev@gmail.com"
          >
            Email Me
          </a>
        </div>
      </section>
    </div>
  );
}
