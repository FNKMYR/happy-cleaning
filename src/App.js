import './App.css';
import Room from './Room.js';
import Header from './Header.js';

export default function App() {
  return (
    <main className="App">
      <Header>Happy cleaning!</Header>
      <Room
        text="Küche"
        descriptionText="Die Spüle muss sauber sein"
        isDescriptionVisible={true}
        isClean
      />
      <Room
        text="Wohnzimmer"
        descriptionText="Das Kuhfell bitte nur mit der Haarrichtung saugen"
        isDescriptionVisible={false}
        isClean={false}
      />
      <Room
        text="Bad"
        descriptionText="Glasreiniger für den Spiegel befindet sich in der Küche"
        isDescriptionVisible
      />
    </main>
  );
}
