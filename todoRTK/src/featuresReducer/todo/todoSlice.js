import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: '1', text: 'Hello World'}],
}

export const todoSlice = createSlice({
    name: 'todo', // Name of the slice
    initialState, // Initial state 
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo);
        },
        // toggleComplete: (state, action) => {
        //     const todo = state.todos.find(todo => todo.id === action.payload);
        //     if (todo) {
        //         todo.completed = !todo.completed;
        //     }
        // },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },

        updateTodo: (state, action) => {
            const {id, text} = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        }
    }
});

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions; //exporting action creators
export default todoSlice.reducer; //exporting reducer


//In Redux Toolkit's createSlice function, you define reducers and it automatically generates corresponding action creators for you. 
//So in your code, addTodo, removeTodo, and updateTodo are both the names of reducers and the generated action creators.