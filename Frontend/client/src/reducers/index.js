import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import usersReducer from "./Users.reducer";
import postReducer from "./post.reducer";
import commentReducer from "./comment.reducer";
import likesReducer from "./likes.reducer";

export default combineReducers({
  userReducer,
  usersReducer,
  postReducer,
  commentReducer,
  likesReducer,
});
