import Title from "../Title/Title";
import Techno from "./Techno/Techno";
import "./skills.scss";

const Skills = () => {
  return (
    <section id="skills" className="container_skills">
      <Title 
      title="Mes compétences"
      symbol="search" />

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
            description="J'utilise JS depuis que j'ai commencé à coder. C'est le langage que je connais le mieux."
            typeOfLangage="Front/ Back"
          />
          <Techno
            title="SCSS"
            image="https://svgl.app/library/sass.svg"
            description="J'ai pour habitude d'utiliser SCSS plutôt que le CSS classique"
            typeOfLangage="Front"
          />
          <Techno
            title="Tailwind CSS"
            image="https://svgl.app/library/tailwindcss.svg"
            description="Utilisé sur quelques projet, tailwind est pratique mais, à mon sens, réduit la lisibilité du code."
            typeOfLangage="Front"
          />
          <Techno
            title="React"
            image="https://svgl.app/library/react.svg"
            description="C'est la librairie que j'utilise le plus pour développer mes projets front."
            typeOfLangage="Front"
          />
          <Techno
            title="Node.js"
            image="https://svgl.app/library/nodejs.svg"
            description="Côté back-end, je n'utilise que Node.js pour développer mes projets. "
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
            description="Utilisé dans un projet de belle envergure, O'Talent, mon projet de fin de formation."
            typeOfLangage="Back"
          />
          <Techno
            title="PostgresQL"
            image="https://svgl.app/library/postgresql.svg"
            description="Le SGBDR que j'ai utilisé pour l'ensemble de mes projets jusqu'à maintenant."
            typeOfLangage="Back"
          />
          <Techno
            title="Sequelize"
            image="https://svgl.app/library/sequelize.svg"
            description="Un ORM que j'utilise parfois mais j'aime écrire mes requêtes SQL à la main."
            typeOfLangage="Back"
          />
          <Techno
            title="Github"
            image="https://svgl.app/library/github.svg"
            description="C'est le seul gestionnaire de .git que j'utilise."
            typeOfLangage="Git Managment"
          />
          <Techno
            title="Python (débutant)"
            image="https://svgl.app/library/python.svg"
            description="Très attiré par l'IA, comme de nombreux dev, je souhaite apprendre cette technologie."
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
            description="Utilisé sur quelques projet, Next s'intègre parfaitement avec React et permet un déploiement rapide avec Vercel"
            typeOfLangage="Framework"
          />
        </div>

    </section>
  );
};

export default Skills;
