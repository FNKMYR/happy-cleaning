import './App.css';
import Room from './Room.js';
import Header from './Header.js';

export default function App() {
  const rooms = [
    {
      text: 'Küche',
      descriptionText: 'Die Spüle muss sauber sein',
      isDescriptionVisible: true,
      isClean: true,
    },
    {
      text: 'Wohnzimmer',
      descriptionText: 'Das Kuhfell bitte nur mit der Haarrichtung saugen',
      isDescriptionVisible: false,
      isClean: false,
    },
    {
      text: 'Bad',
      descriptionText:
        'Glasreiniger für den Spiegel befindet sich in der Küche',
      isDescriptionVisible: true,
    },
  ];
  return (
    <main className="App">
      <Header>Happy cleaning!</Header>
      {rooms.map(({ text, descriptionText, isDescriptionVisible, isClean }) => (
        <Room
          key={text}
          text={text}
          descriptionText={descriptionText}
          isDescriptionVisible={isDescriptionVisible}
          isClean={isClean}
        />
      ))}
    </main>
  );
}
