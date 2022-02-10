import './Flatmates.css';
import { useState } from 'react';

export default function Flatmates() {
  const [flatmates, setFlatmates] = useState([]);
  const [hasError, setHasError] = useState(false);

  loadFlatmates();

  async function loadFlatmates() {
    try {
      const response = await fetch(
        'https://rickandmortyapi.com/api/character/'
      );
      if (response.ok) {
        const data = await response.json();
        setFlatmates(data.results);
      } else {
        throw new Error('404- not found');
      }
    } catch (error) {
      console.log(error.message);
      setHasError(true);
    }
  }
  return (
    <div className="App">
      {hasError && <p>Error: could not load flatmates.</p>}
      <ul>
        {flatmates.map(({ name, status, id }) => (
          <li key={id}>
            <h2>{name}</h2>
            Status: {status}
          </li>
        ))}
      </ul>
    </div>
  );
}
