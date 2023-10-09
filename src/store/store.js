import { configureStore } from '@reduxjs/toolkit';
import PostsReducer from './reducers/postsSlice';
import UsersReducer from './reducers/usersSlice';

export const store = configureStore({
    reducer: {
        posts: PostsReducer,
        users: UsersReducer,
    },
});
