import "./footerP1.scss";

const FooterP1 = () => {
  return (
    <section className="footerP1">
      <div>
        <img src="expertise.svg" alt="un pin de localisation avec un sportif en son centre" />
        <h3>Expertise sportive & commerciale</h3>
        <p>Sportif de toujours et ancien Decathlonien, je serai un allié parfait pour le développement de Decathlon Travel</p>
      </div>
      <div>
        <img src="accessible.svg" alt="un émoticone qui sourit" />
        <h3>Développeur accessible</h3>
        <p>Je suis prêt à accepter différentes formes de contrat, CDI, CDD, stage ou même freelance.</p>
      </div>
      <div>
        <img src="responsable.svg" alt="Une terre signe de l'engagement environnementale" />
        <h3>Démarche responsable</h3>
        <p>Amoureux de la nature depuis tout jeune, la démarche environnementale contenu dans le projet me touche particulièrement.</p>
      </div>
      <div>
        <img src="/prox.svg" alt="médaille certification" />
        <h3>Garantie proximité</h3>
        <p>Etant déja installé dans la région depuis de longue année, je connais bien Annecy et ses environs.</p>
      </div>
    </section>
  );
};

export default FooterP1;
