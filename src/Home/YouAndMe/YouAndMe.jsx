/* eslint-disable react/no-unescaped-entities */
import Title from "../../Title/Title";
import "./youAndMe.scss";

const YouAndMe = () => {
  return (
    <section id="youandme" className="you_and_me">
      <Title title="Vous et moi" symbol="" />
      <div className="you_and_me_content">
        <details>
          <summary>
            Un langage et des valeurs communes{" "}
            <span className="material-symbols-rounded">check_circle</span>
          </summary>
          <p>
            Ayant été dans l'entreprise Decathlon durant près de 9 ans, j'ai
            partagé les valeurs de l'entreprise et compris sa politique
            générale, ce qui témoigne de mon engagement et de ma compréhension
            de ses objectifs.
          </p>
        </details>
        <details>
          <summary>
            Un apport mutuel{" "}
            <span className="material-symbols-rounded">check_circle</span>
          </summary>
          <p>
            En tant qu'ancien retailer expérimenté, je peux vous apporter mon
            expertise en matière de commerce et de compréhension de la
            clientèle. De votre côté, vous m'apporterez votre expertise
            digitale.
          </p>
        </details>
        <details>
          <summary>
            Développeur web fullstack{" "}
            <span className="material-symbols-rounded">check_circle</span>
          </summary>
          <p>
            Après avoir terminé une formation de 6 mois en tant que développeur
            web, j'ai acquis des compétences en développement front-end et
            back-end, ce qui me permet de comprendre toutes les faces d'un
            projet.
          </p>
        </details>
        <details>
          <summary>
            Adaptabilité et apprentissage continu{" "}
            <span className="material-symbols-rounded">check_circle</span>
          </summary>
          <p>
            Mon parcours chez Decathlon m'a appris à m'adapter rapidement aux
            changements et à apprendre continuellement. Ces compétences sont
            essentielles dans le domaine du développement web où les
            technologies évoluent constamment.
          </p>
        </details>
        <details>
          <summary>
            Collaboration et travail d'équipe{" "}
            <span className="material-symbols-rounded">check_circle</span>
          </summary>
          <p>
            Mon expérience au sein de Decathlon m'a permis de développer des
            compétences en lien avec la collaboration et le travail en équipe,
            des qualités cruciales pour réussir dans un environnement de
            développement agile.
          </p>
        </details>
        <details>
          <summary>
            Ancien leader, futur leader
            <span className="material-symbols-rounded">check_circle</span>
          </summary>
          <p>
            Ayant aimé animer des équipes dans mes précédentes fonctions,
            j'aspire à devenir leader à moyen terme (3 à 4 ans), cette fois-ci
            dans le domaine du digital.
          </p>
          <p>
            En misant sur moi, vous investissez dans l'avenir, car j'ai toujours
            la volonté de progresser et de faire évoluer l'entreprise.
          </p>
        </details>
      </div>
    </section>
  );
};

export default YouAndMe;
