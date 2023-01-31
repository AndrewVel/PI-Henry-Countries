const DificultyStars = ({ number }) => {
  const element = [];
  for (let i = 0; i < number; i++) {
    element.push("⭐");
  }
  return <p>{element}</p>;
};

export default DificultyStars;
