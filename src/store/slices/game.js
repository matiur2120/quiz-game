import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  questions: [],
  error: null,
  score: null,
  currentQuestionIndex: null,
  answareQuestion: []
}


const quizeSlice = createSlice({
  name: 'quize',
  initialState,
  reducers: {
    fetchQuestionSuccess(state, action){
      state.questions = action.payload;
      state.score = 0;
      state.currentQuestionIndex = 0;
    },
    fetchQuestionFail(state, action){
      state.error = action.payload
    },
    answareQuestions(state, action){
      const currentQuestion = state.questions[state.currentQuestionIndex];
      state.score += action.payload === currentQuestion.correct_answer ? 1 : 0;
      state.answareQuestion.push({
        question: currentQuestion.question,
        answare: action.payload,
        correctAnswer: currentQuestion.correct_answer,
        isCorrect: action.payload === currentQuestion.correct_answer
      })
    },
    nextQuestion(state, action){
      state.currentQuestionIndex += 1;
    }
  }
})

export const {fetchQuestionSuccess, fetchQuestionFail, answareQuestions, nextQuestion} = quizeSlice.actions;
export default quizeSlice.reducer;