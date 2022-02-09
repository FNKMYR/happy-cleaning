import './App.css';
import Room from './Room.js';
import Header from './Header.js';
import { useState } from 'react';

export default function App() {
  const [rooms, setRooms] = useState([
    {
      text: 'Küche',
      descriptionText: 'Die Spüle muss sauber sein',
      isClean: true,
    },
    {
      text: 'Wohnzimmer',
      descriptionText: 'Das Kuhfell bitte nur mit der Haarrichtung saugen',
      isClean: false,
    },
    {
      text: 'Bad',
      descriptionText:
        'Glasreiniger für den Spiegel befindet sich in der Küche',
      isClean: false,
    },
  ]);

  return (
    <main className="App">
      <Header>Happy cleaning!</Header>
      {rooms.map(
        ({ text, descriptionText, isDescriptionVisible, isClean }, index) => (
          <Room
            key={text}
            text={text}
            descriptionText={descriptionText}
            isClean={isClean}
            toggleStatus={event => {
              setRooms([
                ...rooms.slice(0, index), //Spread operator wird verwendet, um die vorherigen Arrayinhalte mit rein zu kopieren
                { ...rooms[index], isClean: !isClean },
                ...rooms.slice(index + 1),
              ]);
              event.stopPropagation();
            }}
          />
        )
      )}
    </main>
  );
}
