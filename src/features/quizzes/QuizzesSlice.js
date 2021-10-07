import { createSlice } from '@reduxjs/toolkit';
import { addQuizId } from '../topics/TopicsSlice';

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload; //action.payload = {id: '123', name: 'quizName', topicId: '456', cardIds: ['1', '2', '3']}
        }
    }
})

export const quizThunk = (payload) => { //passed object {id, name, topicId, cardIds}
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(payload))
        dispatch(addQuizId({quizId: payload.id, topicId: payload.topicId}))
    }
}

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions
export default quizzesSlice.reducer;