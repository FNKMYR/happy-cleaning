import './Room.css';

export default function Room({
  text,
  isClean,
  descriptionText,
  isDescriptionVisible,
}) {
  const statusClassName = `Room__status Room__status--${
    isClean ? 'clean' : 'dirty'
  }`;
  const description = isDescriptionVisible ? <p>{descriptionText}</p> : '';
  return (
    <section className="Room">
      <header className="Room__header">
        {text}
        <div className={statusClassName}></div>
      </header>
      {description}
    </section>
  );
}
