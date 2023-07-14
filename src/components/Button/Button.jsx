export const Button = ({ onClick }) => {
  return (
    <div className="Button-Wrapper">
      <button type="button" onClick={onClick} className="Button">
        Load more
      </button>
    </div>
  );
};
