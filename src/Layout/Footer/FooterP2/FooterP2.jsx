import "./footerP2.scss";

const FooterP2 = () => {
  return (
    <section className="footerP2">
      <img
        src="https://www.decathlontravel.com/build/images/logo-decathlon-travel-blanc.svg"
        alt=""
      />
      <div className="container_content_footer">
        <div className="contact">
          <h4>Mes coordonnées</h4>
          <div className="container_button_contact">
            <div className="button_contact">
              <span className="material-symbols-rounded">mail</span>
              <a href="mailto:votreadresse@mail.fr">pierre.gamen@gmail.com</a>
            </div>
            <div className="button_contact">
              <span className="material-symbols-rounded">phone</span>
              <a href="tel:0673607777">0673607777</a>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="design">
            <h4>Info utiles</h4>
          <p>
            Site original : <a href="https://www.decathlontravel.com/">Decathlon Travel</a>
          </p>
          <p>Réinterprété par : Pierre GAMEN</p>
          <p>Réalisé avec React, Vite et déployé avec Netlify.</p>
        </div>
      </div>
    </section>
  );
};

export default FooterP2;
