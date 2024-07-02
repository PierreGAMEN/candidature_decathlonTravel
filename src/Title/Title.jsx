import "./title.scss";

// eslint-disable-next-line react/prop-types
const Title = ({title, symbol}) => {
  return (
    <div className="title">
      <h2>{title}</h2>
      <span className="material-symbols-rounded">{symbol}</span>
    </div>
  );
};

export default Title;
