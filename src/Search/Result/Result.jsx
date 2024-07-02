import dataDev from "../../dataDev";
import "./result.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const [searchResult, setSearchResult] = useState([]);
  const { place, disponibility, sports } = useSelector((state) => state.form);

  const findDevWithFilter = () => {
    const criteria = {
      place,
      disponibility: new Date(disponibility),
      sports: sports
        ? sports.split(",").map((sport) => sport.trim().toLowerCase())
        : [],
    };

    const result = dataDev.filter((dev) => {
      const devDisponibility = new Date(dev.disponibility);

      return (
        (criteria.place
          ? dev.place.toLowerCase().includes(criteria.place.toLowerCase())
          : true) &&
        (criteria.disponibility
          ? devDisponibility >= criteria.disponibility
          : true) &&
        (criteria.sports.length > 0
          ? criteria.sports.every((sport) =>
              dev.sports.map((s) => s.toLowerCase()).includes(sport)
            )
          : true)
      );
    });

    setSearchResult(result);
  };

  useEffect(() => {
    findDevWithFilter();
  }, [place, disponibility, sports]);

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("fr-FR", {
      year: "numeric",
      month: "long",
    }).format(new Date(date));
  };

  return (
    <section className="result">
      <p className="result_number">
        Nous avons trouvé <span>{searchResult.length} résultat(s)</span>
      </p>
      {searchResult.map((dev, index) => (
        <div className="card_dev" key={index}>
          <img src={dev.img} alt={dev.name} />
          <h2>{dev.name}</h2>
          <div className="items">
            <span className="material-symbols-rounded">map</span>
            <p>{dev.place}</p>
          </div>
          <div className="items">
            <span className="material-symbols-rounded">schedule</span>
            <p>A partir de {formatDate(dev.disponibility)}</p>
          </div>
          <div className="items">
            <span className="material-symbols-rounded">settings</span>
            <p>{dev.techno.join(", ")}</p>
          </div>
          <div className="items">
            <span className="material-symbols-rounded">hiking</span>
            <p>{dev.sports.join(", ")}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Result;
