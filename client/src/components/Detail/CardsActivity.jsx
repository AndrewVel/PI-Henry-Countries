import DificultyStars from "./dificultyStars";

const CardsActivity = ({ activity }) => {
  return (
    <div className="cardActivity">
      <h2>{activity.name}</h2>
      <div className="cotainerColum">
        <div className="cotainerActivity">
          <p>Difficulty: </p>
          <p>Duration:</p>
          <p>Season: </p>
        </div>
        <div className="containerDataActivity">
          <DificultyStars number={activity.difficulty} />
          <p> {activity.duration} hours</p>
          <p> {activity.season}</p>
        </div>
      </div>
    </div>
  );
};
export default CardsActivity;
