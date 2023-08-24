"use client"
import React, { useState } from 'react';
import { CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

type Note = string;

const CourseNotes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<number | null>(null);
  const [editedNote, setEditedNote] = useState<string>('');

  const handleCreateNote = () => {
    const newNoteIndex = notes.length;
    setSelectedNote(newNoteIndex);
    setNotes([...notes, '']);
    setEditedNote(''); // Clear the editedNote when creating a new note
  };

  const handleEditNote = (index: number) => {
    setSelectedNote(index);
    setEditedNote(notes[index]);
  };

  const handleSaveNote = (index: number, updatedNote: Note) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = updatedNote;
    setNotes(updatedNotes);
    setSelectedNote(null);
  };

  const handleDeleteNote = (index: number) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    setSelectedNote(null);
  };

  const handleSaveNotes = () => {
    if (selectedNote !== null && editedNote !== '') {
      handleSaveNote(selectedNote, editedNote);
    }
  };

  return (
    <div>
      <CardContent className="space-y-2">
        <div className="space-y-5">
          <Button onClick={handleCreateNote}>
            Create new notes
          </Button>

          <div className="space-y-2">
            {notes.map((note, index) => (
              <div key={index} className="space-y-1">
                {selectedNote === index ? (
                  <Textarea
                    value={editedNote}
                    onChange={(e) => setEditedNote(e.target.value)}
                    placeholder="Type your message here."
                    className="border p-2"
                  />
                ) : (
                  <div className="border p-2">{note}</div>
                )}
                <div className="flex gap-2">
                <Button
                   variant="outline"
                   onClick={() => handleEditNote(index)}>
                    Edit
                    </Button>
                  
                  <Button
                   variant="outline"
                   onClick={() => handleDeleteNote(index)}>
                    Delete
                    </Button>
                  {selectedNote === index && (
                    <Button onClick={handleSaveNotes}>Save Notes</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </div>
  );
};

export default CourseNotes;
