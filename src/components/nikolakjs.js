if (loading === true) {
    return (
      <div className="game-page">
        <Loading />
      </div>
    );
  

    //Game Card
    return (
      <div className="game-page">
        <div className="game-content">
          <div
            dangerouslySetInnerHTML={{ __html: gameCard[questionNr].question }}
            className="game-question"
          ></div>
          <div className="game-answers">
            {gameCard[questionNr].answers.map((answer) => {
              return (
                <button
                  dangerouslySetInnerHTML={{ __html: answer }}
                  value={answer}
                  onClick={(e) => checkAnswer(e)}
                  className="answer-button"
                ></button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};