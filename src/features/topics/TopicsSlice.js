import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => { //passed object {id, name, icon}
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            }
        },
        //adds the quizId to the topics quizIds array
        addQuizId: (state, action) => { //passed object {quizId: '123', topicId: '456'} 
            const { quizId, topicId } = action.payload;
            state.topics[topicId].quizIds.push(quizId)
        }
    }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;