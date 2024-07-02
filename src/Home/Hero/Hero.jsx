/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPlace, setDisponibility, setSports } from "../../store/formSlice";
import "./hero.scss";
import imageHero from "./imageHero";
import listSport from "./listsport";
import listCity from "./listCity";
import listDate from "./listDate";
import { Link } from "react-router-dom";

const Hero = () => {
  const dispatch = useDispatch();
  const { place, disponibility, sports } = useSelector((state) => state.form);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imageHero.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  const [inputForm, setInputForm] = useState({
    place: false,
    disponibility: false,
    sports: false,
  });

  const openPlace = () => {
    setInputForm({
      place: true,
      disponibility: false,
      sports: false,
    });
  };

  const openDisponibility = () => {
    setInputForm({
      place: false,
      disponibility: true,
      sports: false,
    });
  };

  const openSports = () => {
    setInputForm({
      place: false,
      disponibility: false,
      sports: true,
    });
  };

  const closeInput = () => {
    setInputForm({
      place: false,
      disponibility: false,
      sports: false,
    });
  };

  return (
    <section className="hero">
      <img src={imageHero[index].src} alt={imageHero[index].alt} />
      {inputForm.place && (
        <div className="selected_input">
          <h3>Selectionnez une ville</h3>
          <span onClick={closeInput} className="material-symbols-rounded">
            close
          </span>
          <div className="list">
            {listCity.map((city, index) => (
              <p
                onClick={(e) => {
                  dispatch(setPlace(e.target.innerText));
                  closeInput();
                }}
                key={index}
              >
                {city}
              </p>
            ))}
          </div>
        </div>
      )}

      {inputForm.disponibility && (
        <div className="selected_input">
          <h3>Selectionnez une date d'embauche</h3>
          <span onClick={closeInput} className="material-symbols-rounded">
            close
          </span>
          <div className="list calendar">
            {listDate.map((date, index) => (
              <p
                onClick={(e) => {
                  closeInput();
                  dispatch(setDisponibility(e.target.innerText));
                }}
                key={index}
              >
                {date}
              </p>
            ))}
          </div>
        </div>
      )}

      {inputForm.sports && (
        <div className="selected_input">
          <h3>Selectionnez un sport</h3>
          <span onClick={closeInput} className="material-symbols-rounded">
            close
          </span>
          <div className="list">
            {listSport.map((sport, index) => (
              <p
                onClick={(e) => {
                  dispatch(setSports(e.target.innerText));
                  closeInput();
                }}
                key={index}
              >
                {sport}
              </p>
            ))}
          </div>
        </div>
      )}

      <div className="targetPosition">
        <h1>Réservez votre futur développeur web !</h1>
        <form onClick={handleSubmit} action="">
          <div onClick={!place && openPlace} className="container_input">
            <div className="label">
              <span className="material-symbols-rounded">location_on</span>Lieu
            </div>
            {!place ? (
              <div className="placeholder">Lyon</div>
            ) : (
              <div className="selection">
                <p>{place}</p>{" "}
                <span
                  onClick={() => {
                    dispatch(setPlace(""));
                  }}
                  className="material-symbols-rounded"
                >
                  close
                </span>
              </div>
            )}
          </div>

          <div
            onClick={!disponibility && openDisponibility}
            className="container_input"
          >
            <div className="label">
              <span className="material-symbols-rounded">calendar_month</span>
              Date d'embauche
            </div>
            {!disponibility ? (
              <div className="placeholder">Sept 2024</div>
            ) : (
              <div className="selection">
                <p>{disponibility}</p>{" "}
                <span
                  onClick={() => {
                    dispatch(setDisponibility(""));
                  }}
                  className="material-symbols-rounded"
                >
                  close
                </span>
              </div>
            )}
          </div>

          <div onClick={!sports && openSports} className="container_input">
            <div className="label">
              <span className="material-symbols-rounded">location_on</span>
              Sports
            </div>

            {!sports ? (
              <div className="placeholder">Escrime</div>
            ) : (
              <div className="selection">
                <p>{sports}</p>{" "}
                <span
                  onClick={() => {
                    dispatch(setSports(""));
                  }}
                  className="material-symbols-rounded"
                >
                  close
                </span>
              </div>
            )}
          </div>
          <button>
            <Link to="/search">Rechercher</Link>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
