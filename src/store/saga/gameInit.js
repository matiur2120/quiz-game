import { call, cancel, delay, fork, put, take } from 'redux-saga/effects';
import { featchQuizeFromApi } from '../../utils/api';
import { fetchQuestionFail, fetchQuestionSuccess } from '../slices/game';
import { cancelGame, startGame } from '../slices/gameInit';


function* fetchQuestionSags(){
 
  try{
    yield delay(1000)
   const data =  yield call(featchQuizeFromApi);
   yield put(fetchQuestionSuccess(data))
  }catch(error){
    yield put(fetchQuestionFail(error.message))
  }
}

function* cancelFetchQuize(forkedSaga){
  while(true){
    yield take(cancelGame.type)
    console.log('Cancel game type is...', cancelGame.type)
    yield cancel(forkedSaga)
  }
}


export default function* startGameSage(){
  while(true){
    yield take(startGame.type)
   const forkedSaga = yield fork(fetchQuestionSags)
   yield fork(cancelFetchQuize, forkedSaga)
  }
}