function Game({ questions, step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100);
  console.log("Game > percentage:", percentage);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((item, index) => {
          return (
            <li
              key={item}
              onClick={() => {
                onClickVariant(index);
              }}
            >
              {item}
            </li>
          );
        })}

        {/* <li>Это функция для хранения данных компонента</li>
          <li>Это глобальный стейт</li>
          <li>Это когда на ты никому не нужен</li> */}
      </ul>
    </>
  );
}

export default Game;
