import React from 'react';
import './_Notes.style.scss';
import { useNotes } from '../../hooks/useNotes';
import ToDoNote from '../../components/ToDoNote';

const Notes = () => {
    const {
        notes,
        handleToggleNote
    } = useNotes([]);

    const toDoTasks = notes.map(note => (
        <ToDoNote {...note} key='note.id' handleChecked={() => handleToggleNote(note.id)}> </ToDoNote>
    ))

    return (
        <>
        <div className='px-3 py-2'>
            <div className='row align-items-center'>
                <div className='col-md-6'>
                    <h1>My tasks ({notes.length})</h1>
                </div>
                <div className='col-md-6 text-end'>
                    <button className='btn btn-success px-4'>New task</button>
                </div>
            </div>
            <div>
                {toDoTasks}
            </div>
        </div>
        </>
    );
}

export default Notes;