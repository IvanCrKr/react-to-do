import React from 'react';
import './_Notes.style.scss';
import { useNotes } from '../../hooks/useNotes';

const Notes = () => {
    const {
        notes
    } = useNotes([]);

    return (
        <>
        <div className='px-3 py-2'>
            <div className='row align-items-center'>
                <div className='col-md-8'>
                    <h1>My tasks ({notes.length})</h1>
                </div>
                <div className='col-md-4 text-end'>
                    <button className='btn btn-success px-4'>New task</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Notes;