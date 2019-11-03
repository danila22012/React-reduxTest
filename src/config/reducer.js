import { combineReducers } from 'redux';
import home from '../components/pages/Home/reducer'
import favorite from '../components/pages/Favorite/reducer'
import posts from '../components/pages/Posts/reducer'

export default combineReducers({
   home,
   favorite,
   posts
})
