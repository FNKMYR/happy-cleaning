import './Navigation.css';

export default function Navigation({ currentPage, setCurrentPage }) {
  return (
    <div className="Navigation">
      <button
        onClick={() => setCurrentPage('rooms')}
        disabled={currentPage === 'rooms'}
        className={`Navigation__button ${
          currentPage === 'rooms'
            ? 'Navigation__button--active'
            : 'Navigation__button--inactive'
        }`}
      >
        Rooms
      </button>
      <button
        onClick={() => setCurrentPage('flatmates')}
        disabled={currentPage === 'flatmates'}
        className={`Navigation__button ${
          currentPage === 'flatmates'
            ? 'Navigation__button--active'
            : 'Navigation__button--inactive'
        }`}
      >
        Flatmates
      </button>
    </div>
  );
}
