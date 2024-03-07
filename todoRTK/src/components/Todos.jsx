import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../featuresReducer/todo/todoSlice';

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState('');

    const deleteTodoHandler = (id) => {
        dispatch(removeTodo(id));
    }

    const updateTodoHandler = (id) => {
        dispatch(updateTodo({
            id: id,
            text: editingText
        }));
        setEditingId(null);
        setEditingText('');
    }

    const editTodoHandler = (id, text) => {
        setEditingId(id);
        setEditingText(text);
    }

    return (
        <div>
            <div>
                {todos.map(todo => (
                    <div key={todo.id}>
                        {editingId === todo.id ? (
                            <div>
                                <input value={editingText} onChange={(e) => setEditingText(e.target.value)} />
                                <button onClick={() => updateTodoHandler(todo.id)}>Save</button>
                            </div>
                        ) : (
                            <div>
                                <h3>{todo.text}</h3>
                                <button onClick={() => editTodoHandler(todo.id, todo.text)}>Update</button>
                                <button onClick={() => deleteTodoHandler(todo.id)}>Delete</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Todos