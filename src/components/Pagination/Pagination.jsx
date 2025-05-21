import "./Pagination.css";

function Pagination({ currentPage, totalCount, pageSize, onPageChange }) {
  const totalPages = Math.ceil(totalCount / pageSize);
  if (totalPages <= 1) return null;

  const maxVisible = 5;
  const currentGroup = Math.floor((currentPage - 1) / maxVisible);
  const start = currentGroup * maxVisible + 1;
  const end = Math.min(start + maxVisible - 1, totalPages);

  const visiblePages = [];
  for (let i = start; i <= end; i++) {
    visiblePages.push(i);
  }

  const goToPrevGroup = () => {
    const prevGroupPage = Math.max(1, start - 1);
    onPageChange(prevGroupPage);
  };

  const goToNextGroup = () => {
    const nextGroupPage = Math.min(totalPages, end + 1);
    onPageChange(nextGroupPage);
  };

  return (
    <div className="pagination-container">
      <button
        className="pagination-button"
        onClick={goToPrevGroup}
        disabled={start === 1}
      >
        &lt;
      </button>

      {visiblePages.map((pageNum) => (
        <button
          key={pageNum}
          className={`pagination-button ${
            currentPage === pageNum ? "active" : ""
          }`}
          onClick={() => onPageChange(pageNum)}
        >
          {pageNum}
        </button>
      ))}

      <button
        className="pagination-button"
        onClick={goToNextGroup}
        disabled={end === totalPages}
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
