import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { answareQuestions } from "../store/slices/game";
import { finishGame } from "../store/slices/gameInit";

const GamePage = () => {
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState(60);
  const score = useSelector((state) => state.quize.score);
  console.log(score);
  const currentQuestionIndex = useSelector(
    (state) => state.quize.currentQuestionIndex
  );
  const currentQuestion = useSelector(
    (state) => state.quize.questions[state.quize.currentQuestionIndex].question
  );
  const handleAnsware = (answare) => {
    dispatch(answareQuestions(answare));
  };
  const endGameHandler = () => {
    dispatch(finishGame());
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, [1000]);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className='h-screen bg-gray-200 flex flex-col'>
      <p className='w-16 h-16 bg-gray-800 text-white rounded-full  border-4 border-green-500 flex items-center justify-center text-2xl ml-20 mt-20'>
        {timeLeft}
      </p>
      <div className='flex justify-between items-center text-2xl px-16'>
        <p>Question: {currentQuestionIndex}/10</p>
        <p>{score}</p>
      </div>

      <div className='w-full mx-12 flex flex-col items-center'>
        <p
      
          className='font-semiblod text-center mt-6 bg-yellow-300 p-2 rounded-md'
          dangerouslySetInnerHTML={{ __html: currentQuestion }}
        ></p>
        <div className='w-1/2 flex items-center justify-around mt-8'>
          <button
            className='outline-none ring-2 bg-blue-600 px-6 py-1 rounded-md'
            onClick={() => handleAnsware("True")}
          >
            True
          </button>
          <button
            className='outline-none ring-2 bg-blue-600 px-6 py-1 rounded-md'
            onClick={() => handleAnsware("False")}
          >
            False
          </button>
        </div>
        <button
          className='outline-none bg-indigo-700 rounded-md mt-8 px-4 py-1 w-36'
          onClick={endGameHandler}
        >
          Quite Game
        </button>
      </div>
    </div>
  );
};

export default GamePage;
