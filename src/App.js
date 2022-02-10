import './App.css';
import Room from './Room.js';
import Header from './Header.js';
import Navigation from './Navigation.js';
import Flatmates from './Flatmates.js';

import { useState } from 'react';
import { useImmer } from 'use-immer';

export default function App() {
  const [rooms, updateRooms] = useImmer([
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
  const [currentPage, setCurrentPage] = useState('rooms');

  return (
    <div className="App">
      {currentPage === 'rooms' && (
        <main>
          <Header>Happy cleaning!</Header>
          {rooms.map(
            (
              { text, descriptionText, isDescriptionVisible, isClean },
              index
            ) => (
              <Room
                key={text}
                text={text}
                descriptionText={descriptionText}
                isClean={isClean}
                toggleStatus={event => {
                  event.stopPropagation();

                  updateRooms(draft => {
                    draft[index].isClean = !isClean;
                  });

                  // setRooms([
                  //   ...rooms.slice(0, index), //Spread operator wird verwendet, um die vorherigen Arrayinhalte mit rein zu kopieren
                  //   { ...rooms[index], isClean: !isClean },
                  //   ...rooms.slice(index + 1),
                  // ]);
                }}
              />
            )
          )}
        </main>
      )}
      {currentPage === 'flatmates' && (
        <section>
          <h1>Flatmates</h1>
          <Flatmates />
        </section>
      )}
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
