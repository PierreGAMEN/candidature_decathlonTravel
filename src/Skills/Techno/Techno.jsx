import "./techno.scss";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Techno = ({ title, description, image, typeOfLangage }) => {
  const [event, setEvent] = useState(false);

  const handleChange = () => {
    setEvent(!event);
  };

  return (
    <div
      className={`container_techno ${event ? "anim" : ""}`}
      onClick={handleChange}
    >
      {!event && <img src={image} alt={`Logo ${title}`}/>}
      <div className={`container_techno_text ${event ? "anim" : ""}`}>
        {!event ? (
          <>
          <h3>{typeOfLangage}</h3>
          <div className="divider"></div>
          <h2>{title}</h2>
          </>
        ) : (
          <p className={`${!event ? "" : "animP"}`}>{description}</p>
        )}
      </div>
    </div>
  );
};

export default Techno;