import { delay, put, race, take } from 'redux-saga/effects';
import { answareQuestions, fetchQuestionSuccess, nextQuestion } from '../slices/game';
import { finishGame } from '../slices/gameInit';

function* answareSage(){
  for(let i =0; i<10; i++){
    yield take(answareQuestions.type);
    yield put(nextQuestion())
  }
}


export default function* gameSaga(){
  while(true){
    yield take(fetchQuestionSuccess.type)
    yield race({
      dleay: delay(10000),
      done: answareSage()
    })
    yield put(finishGame())
  }
}