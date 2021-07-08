import { createSlice } from "@reduxjs/toolkit";
import * as stages from '../../utils/constants';
import { fetchQuestionFail, fetchQuestionSuccess } from "./game";

const initialState = {
  stage: stages.START_GAME,
  userName: ''
}

const gameState = createSlice({
  name: 'gameState',
  initialState,
  reducers: {
    startGame(state, action){
      state.userName = action.payload;
      state.stage = stages.FEACHING_GAME; 
    },
    cancelGame(state, action){
      state.stage = stages.START_GAME
    },
    finishGame(state, action){
      state.stage = stages.END_GAME
    },
    restartGame(state, action){
      state.stage = stages.START_GAME
    }
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchQuestionSuccess, (state, action)=>{
      state.stage = stages.GAME
    }).addCase(fetchQuestionFail, (state, action)=>{
      state.stage = stages.START_GAME 
    })
  }
});

export const {startGame, cancelGame, finishGame, restartGame} = gameState.actions;

export default gameState.reducer;