import React from "react";
import { useDispatch } from "react-redux";
import { cancelGame } from "../store/slices/gameInit";

const FachingPage = () => {
  const dispatch = useDispatch();
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2 className='text-5xl'>Loading.....</h2>
      <button
        className='outline-none w-52 text-white font-semibold ring-2 bg-yellow-700 rounded-md px-4 py-2 mt-8'
        onClick={() => {
          dispatch(cancelGame());
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default FachingPage;
