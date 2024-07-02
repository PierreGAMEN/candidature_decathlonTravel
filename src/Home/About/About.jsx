/* eslint-disable react/no-unescaped-entities */
import Title from "../../Title/Title";
import "./About.scss";
import { useState, useEffect } from "react";

const About = () => {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLarge(window.innerWidth >= 1100);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section id="about" className="about">
      <Title title="Qui suis-je ?" symbol="person" />

      <div className="about_content">
        <div className="about_text">
          <div>
            <p>
              <i>
                "Bonjour, je m'appelle Pierre GAMEN, je travaille chez Decathlon
                depuis 9 ans, mes sports passions sont ...".{" "}
              </i>
            </p>
          </div>
          <p>
            Mince changement de disque, je ne suis plus Decathlonniens, je peux
            me présenter autrement.
          </p>
          <p>
            Je m'apelle Pierre GAMEN, j'ai décidé de quitter le retail il y a un
            an environ pour me lancer dans le développement web et plus
            généralement dans l'accompagnement de projets digitaux.
          </p>
          <p>
            Depuis longtemps, je songeais à me reconvertir. Passionné par les
            nouvelles technologies, j'ai toujours voulu comprendre leur
            fonctionnement et imaginer leurs possibilités pour l'humanité.
            Devenir développeur web était pour moi un moyen efficace pour
            rentrer dans ce secteur, en apprendre davantage et surtout
            participer à toutes ces évolutions.
          </p>
          <p>
            Revenons à mon parcours : ancien Decathlonien, j'ai occupé divers
            postes, commençant comme vendeur à temps partiel pour terminer en
            tant que responsable des services à Epagny. J'ai également été
            responsable de rayon et responsable d'exploitation.
          </p>
          <p>
            Je suis un sportif passionné par la montagne, notamment l'escalade
            et le trail. J'ai aussi pratiqué d'autres sports à différentes
            saisons et périodes de ma vie, tels que le ski (alpin, fond,
            alpinisme), la randonnée, le trekking, le vélo de route, le VTT et
            la course d'orientation.
          </p>
          <p>
            Côté personnalité, je suis une personne enthousiaste, bienveillante
            et consciencieuse. Mon dernier test de personnalité indique que je
            suis un ESTJ, ce qui correspond à la personnalité de 'Directeur'.
            Cela signifie que je suis attaché aux valeurs d'honnêteté et de
            dévouement. <br></br>
            <br></br>Mon enthousiasme me pousse à toujours donner le meilleur de
            moi-même, ma bienveillance favorise un environnement de travail
            harmonieux, et ma conscience professionnelle garantit que chaque
            tâche est menée à bien avec rigueur. Combinées à mon profil ESTJ,
            ces caractéristiques font de moi un atout pour tout projet
            nécessitant rigueur et organisation, le tout dans la bonne humeur et
            le partage.
          </p>
        </div>
        {isLarge && (
          <div className="about_container_img">
            <div className="bloc1 animBC1">
              <img
                className="img1"
                src="/escalade.jpg"
                alt="photo homme avec paysage montagne"
              />
            </div>
            <div className="bloc2">
              <img
                className="img1 animBC2img1"
                src="/trail.jpg"
                alt="photo deux personnes souriantes"
              />
              <img
                className="img2"
                src="/trio.jpg"
                alt="photo de trois personnes portant un gilet Decathlon"
              />
              <img
                className="img3 animBC2img2"
                src="/portaledge.jpg"
                alt="photo d'une personne dormant sur un portaledge"
              />
            </div>
            <div className="bloc3">
              <img
                className="img1 animBC3img1"
                src="/sdf.jpg"
                alt="photo de deux personnes en tenu de ski de fond devant des pistes"
              />
              <img
                className="img2 animBC3img2"
                src="/mer.jpg"
                alt="photo de la mer depuis une voie d'escalade"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
