import {all} from 'redux-saga/effects'
import startGameSage from './saga/gameInit'
import game from './saga/game'


export default function*(){
  yield all([startGameSage(), game()])
}

