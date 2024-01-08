import { useState } from "react";
import { reactDummyNotes } from '../assets/notes';

export const useNotes = (initialState) => {
    let savedNotes = localStorage.getItem('saved_notes');

    if (!savedNotes) {
        savedNotes = reactDummyNotes;
    } else {
        savedNotes = JSON.parse(savedNotes);
        console.log({savedNotes})
    }

    const [notes, setNotes] = useState(savedNotes);
    localStorage.setItem('saved_notes', JSON.stringify(notes))

    const handleToggleNote = (noteId) => {
        setNotes(currentNotes => currentNotes.map(note => {
            if (note.id === noteId) {
                const changedNote = {
                    ...note,
                    done: !note.done
                };
                return changedNote;
            }
            return note;
        }));
        localStorage.setItem('saved_notes', JSON.stringify(notes));
    };
    
    return {
        notes,
        handleToggleNote
    };
};