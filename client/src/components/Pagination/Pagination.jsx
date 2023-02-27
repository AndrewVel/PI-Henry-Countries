// import "./PaginationModule.css";
// const Pagination = ({ countries, pagination, perPage }) => {
//   const pageNumber = [];
//   const x = );
//   for (let i = 1; i <= x; i++) {
//     pageNumber.push(i);
//   }

//   return (
//     <div>
//       <ul>
//         {pageNumber &&
//           pageNumber.map((number) => (
//             <span key={number}>
//               <button
//                 onClick={() => pagination(number)}
//                 className="buttonNumber"
//               >
//                 {number}
//               </button>
//             </span>
//           ))}
//       </ul>
//     </div>
//   );
// };

import "./PaginationModule.css";
const Pagination = ({ countries, pagination, perPage, currentPage }) => {
  const pagesCount = countries === 250 ? 26 : Math.ceil(countries / perPage);

  const pageNumbers = [];
  const maxPagesToShow = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(pagesCount, startPage + maxPagesToShow - 1);

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const handleClick = (page) => {
    pagination(page);
  };

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>

      {pageNumbers.map((number) => (
        <div key={number}>
          <button
            onClick={() => handleClick(number)}
            className={`buttonNumber ${
              currentPage === number ? "is-current" : ""
            }`}
          >
            {number}
          </button>
        </div>
      ))}

      <button
        className="pagination-button"
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === pagesCount}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
