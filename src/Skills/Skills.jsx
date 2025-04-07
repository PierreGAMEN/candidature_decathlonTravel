import Title from "../Title/Title";
import Techno from "./Techno/Techno";
import "./skills.scss";

const Skills = () => {
  return (
    <section id="skills" className="container_skills">
      <Title title="Mes compétences" symbol="search" />

      <div className="container_skills_techno">
        <Techno
          title="HTML"
          image="https://svgl.app/library/html5.svg"
          description="Langage de base du développement web. Utilisé pour tous mes projets web."
          typeOfLangage="Front"
        />
        <Techno
          title="Javascript"
          image="https://svgl.app/library/javascript.svg"
          description="J'utilise JS depuis 2 ans environ."
          typeOfLangage="Front/ Back"
        />
        <Techno
          title="SCSS"
          image="https://svgl.app/library/sass.svg"
          description="J'ai pour habitude d'utiliser des fichiers SCSS plutôt que CSS dans mes projets."
          typeOfLangage="Front"
        />
        <Techno
          title="Tailwind CSS"
          image="https://svgl.app/library/tailwindcss.svg"
          description="Utilisé sur quelques projets, tailwind est pratique pour réaliser rapidement une mise en forme sans sortir de son fichier."
          typeOfLangage="Front"
        />
        <Techno
          title="React"
          image="https://svgl.app/library/react_dark.svg"
          description="J'utilise React quasiment systématiquement pour développer mes projets front, comme ici."
          typeOfLangage="Front"
        />
        <Techno
          title="Three.js (débutant)"
          image="https://svgl.app/library/threejs-light.svg"
          description="Actuellement en apprentissage, je suis actuellement le cours 'three.js journey'"
          typeOfLangage="Front"
        />
        <Techno
          title="Node.js"
          image="https://svgl.app/library/nodejs.svg"
          description="J'utilise principalement Node.js pour développer mes projets côté back."
          typeOfLangage="Back"
        />
        <Techno
          title="Express"
          image="https://svgl.app/library/expressjs.svg"
          description="C'est le principal framework que j'utilise lorsque je développe un projet côté back."
          typeOfLangage="Back"
        />
        <Techno
          title="GraphQL"
          image="https://svgl.app/library/graphql.svg"
          description="Utilisé dans seulement deux  de mes projets dont un d'une assez grande envergure, GraphQL est très pratique pour les requêtes côté front."
          typeOfLangage="Back"
        />
        <Techno
          title="PostgresQL"
          image="https://svgl.app/library/postgresql.svg"
          description="Postgres est le SGBDR que j'ai utilisé pour l'ensemble de mes projets jusqu'à maintenant."
          typeOfLangage="Back"
        />
        <Techno
          title="Sequelize"
          image="https://svgl.app/library/sequelize.svg"
          description="Un ORM que j'utilise parfois mais j'aime aussi écrire mes requêtes SQL à la main."
          typeOfLangage="Back"
        />
        <Techno
          title="Github"
          image="https://svgl.app/library/github.svg"
          description="Github est le seul gestionnaire de git que j'utilise."
          typeOfLangage="Git Managment"
        />
        <Techno
          title="Python (débutant)"
          image="https://svgl.app/library/python.svg"
          description="Très attiré par l'IA, je commence à apprendre cette technologie."
          typeOfLangage="Back"
        />
        <Techno
          title="Vite"
          image="https://svgl.app/library/vitejs.svg"
          description="Je développe principalement mes projets front avec Vite."
          typeOfLangage="Autres"
        />
        <Techno
          title="Astro"
          image="https://svgl.app/library/astro.svg"
          description="Utilisé sur quelques projets, Astro est pratique avec notamment son système de routage par 'Page'."
          typeOfLangage="Framework"
        />
        <Techno
          title="Next.js"
          image="https://svgl.app/library/nextjs_icon_dark.svg"
          description="Utilisé sur quelques projets, Next s'intègre parfaitement avec React et permet un déploiement rapide avec Vercel"
          typeOfLangage="Framework"
        />
      </div>
    </section>
  );
};

export default Skills;
