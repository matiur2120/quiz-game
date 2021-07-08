import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { restartGame } from "../store/slices/gameInit";

const EndGamePage = () => {
  const ansQuestion = useSelector((state) => state.quize.answareQuestion);
  const score = useSelector((state) => state.quize.score);
  console.log(ansQuestion);
  const dispatch = useDispatch();
  const handleRestart = () => {
    dispatch(restartGame());
  };
  return (
    <div className='h-screen bg-indigo-200 flex flex-col items-center justify-center'>
      <button
        className='bg-indigo-600 px-4 py-1 rounded-md mb-4'
        onClick={() => handleRestart()}
      >
        Restart Game
      </button>
      <p>Your score is: {score}/10</p>
      <div>
        {ansQuestion.map((item) => (
          <div>
            <p dangerouslySetInnerHTML={{ __html: item.question }}></p>
            <p style={{ color: item.isCorrect ? "#000" : "red" }}>
              {item.answare}
            </p>
            <p>{item.correctAnswer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EndGamePage;
