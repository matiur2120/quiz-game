import { combineReducers } from '@reduxjs/toolkit'
import gameState from './slices/gameInit'
import quize from './slices/game'

export default combineReducers({gameState, quize})