const Pagination = ({ page, setPage }) => {
  return (
    <div
      className="
     flex
     justify-center
     gap-4
     mt-6
    "
    >
      <button onClick={() => setPage((p) => p - 1)}>Prev</button>

      <button onClick={() => setPage((p) => p + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
