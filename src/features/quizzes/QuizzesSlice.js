import { createSlice } from '@reduxjs/toolkit';
import { addQuizId } from '../topics/TopicsSlice';

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => { //passed object {id, name, topicId, cardIds}
            const {id, name, topicId, cardIds} = action.payload;
            state.quizzes[id] = {
               id: id,
               name: name,
               topicId: topicId,
               cardIds: cardIds
            }
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