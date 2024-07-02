/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./header.scss";

const Header = () => {
  // Déclaration des états locaux
  const [isEvent, setIsEvent] = useState(true); // État pour gérer la présence de l'événement promotionnel
  const [isMobile, setIsMobile] = useState(false); // État pour gérer si l'affichage est mobile ou non
  const [navIsOpen, setNavIsOpen] = useState(false); // État pour gérer l'ouverture du menu de navigation

  // Utilisation de useEffect pour gérer la détection du redimensionnement de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1300); // Mise à jour de isMobile selon la largeur de la fenêtre
    };

    handleResize(); // Appel initial pour définir isMobile selon la taille initiale de la fenêtre

    window.addEventListener("resize", handleResize); // Ajout de l'événement resize

    return () => {
      window.removeEventListener("resize", handleResize); // Nettoyage de l'événement resize
    };
  }, []);

  // Utilisation de useEffect pour gérer les effets de l'ouverture et de la fermeture du menu de navigation
  useEffect(() => {
    if (navIsOpen) {
      document.body.classList.add("no-scroll"); // Ajoute une classe pour désactiver le défilement
      window.scrollTo(0, 0); // Fait défiler la page vers le haut
    } else {
      document.body.classList.remove("no-scroll"); // Supprime la classe pour réactiver le défilement
    }
  }, [navIsOpen]); // Dépendance sur navIsOpen

  return (
    <header className="header">
      {/* Affiche la section promotionnelle si isEvent est vrai */}
      {isEvent && (
        <div className="header_promo">
          <p>
            <span className="material-symbols-rounded">sunny</span>
            Profitez d'un candidat très <span>motivé</span>! Pour en savoir plus
            rendez-vous sur{" "}
            <a href="https://pierre-gamen.netlify.app/">cette page !</a>
          </p>
        </div>
      )}
      {/* Affiche la version mobile si isMobile est vrai */}
      {isMobile && (
        <div
          className={`${!navIsOpen ? "header_mobile" : "header_mobile open"}`}
        >
          <div className="header_mobile_container_img">
            <img
              src={`${
                !navIsOpen ? "/logo-decathlon-white.svg" : "/logo-decathlon.svg"
              }`}
              alt="logo Decathlon Travel"
            />
          </div>

          {/* Bouton pour ouvrir/fermer le menu de navigation mobile */}
          <div
            onClick={() => {
              setNavIsOpen(!navIsOpen); // Inverse l'état de navIsOpen lors du clic
            }}
            className="menu"
          >
            {!navIsOpen ? (
              <div className="menu_burger">
                <div className={`${!navIsOpen ? "line white" : "line"}`}></div>
                <div className={`${!navIsOpen ? "line white" : "line"}`}></div>
                <div className={`${!navIsOpen ? "line white" : "line"}`}></div>
              </div>
            ) : (
              <span className="material-symbols-rounded">close</span>
            )}
          </div>
        </div>
      )}
      {/* Affiche le menu de navigation si navIsOpen est vrai */}
      {navIsOpen && (
        <nav className="header_nav">
          <div className="link">
            <a onClick={() => {setNavIsOpen(false)}} href="#about">Qui suis-je ?</a>
            <span className="material-symbols-rounded">chevron_right</span>
          </div>
          <div className="link">
            <a onClick={() => {setNavIsOpen(false)}} href="#skills">Mes champs de compétences</a>
            <span className="material-symbols-rounded">chevron_right</span>
          </div>
          <div className="link">
          <a onClick={() => {setNavIsOpen(false)}} href="#youandme">Vous et moi</a>
            <span className="material-symbols-rounded">chevron_right</span>
          </div>
        </nav>
      )}
      {/* Affiche la version desktop si isMobile est faux */}
      {!isMobile && (
        <div className="header_desktop">
          <div className="header_desktop_container_img">
            <img
              src={`${
                !navIsOpen ? "/logo-decathlon-white.svg" : "/logo-decathlon.svg"
              }`}
              alt="logo Decathlon Travel"
            />
          </div>

          <nav className="header_desktop_nav">
            <a href="#about">Qui suis-je ?</a>
            <a href="#skills">Mes champs de compétences</a>
            <a href="#youandme">Vous et moi</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
