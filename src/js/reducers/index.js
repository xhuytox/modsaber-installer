import { combineReducers } from 'redux'

import themeReducer from './themeReducer'
import statusReducer from './statusReducer'
import modsReducer from './modsReducer'
import gameVersionsReducer from './gameVersionsReducer'
import installReducer from './installReducer'
import jobsReducer from './jobsReducer'
import tabsReducer from './tabsReducer'
import containerReducer from './containerReducer'

export default combineReducers({
  theme: themeReducer,
  status: statusReducer,
  mods: modsReducer,
  gameVersions: gameVersionsReducer,
  install: installReducer,
  jobs: jobsReducer,
  tabs: tabsReducer,
  container: containerReducer,
})