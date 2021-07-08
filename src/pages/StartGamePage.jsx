import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startGame } from "../store/slices/gameInit";

const StartGamePage = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const startGameHandler = () => {
    dispatch(startGame(userName));
  };
  return (
    <div className='flex flex-col items-center  justify-center h-screen'>
      <input
        className='outline-none w-52 h-8 border border-black p-2 rounded-md'
        type='text'
        name='userName'
        value={userName}
        placeholder='Name here...'
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        className='outline-none bg-blue-700 px-4 py-2 rounded-md ring-1 mt-8 transition duration-200 ease-in-out hover:bg-blue-900'
        onClick={startGameHandler}
      >
        Start Game
      </button>
    </div>
  );
};

export default StartGamePage;
