import { combineReducers } from 'redux';
import home from '../components/pages/Home/reducer'
import favorite from '../components/pages/Favorite/reducer'
import posts from '../components/pages/Posts/reducer'
import post from '../components/pages/Post/reducer'

export default combineReducers({
   home,
   favorite,
   posts,
   post
})
