import "./PaginationModule.css";
const Pagination = ({ countries, pagination, perPage }) => {
  const pageNumber = [];
  const x = countries === 250 ? 26 : Math.ceil(countries / perPage);
  for (let i = 1; i <= x; i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      <ul>
        {pageNumber &&
          pageNumber.map((number) => (
            <span key={number}>
              <button
                onClick={() => pagination(number)}
                className="buttonNumber"
              >
                {number}
              </button>
            </span>
          ))}
      </ul>
    </div>
  );
};

export default Pagination;
