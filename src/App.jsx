import { useEffect, useState } from 'react';
import { addNote } from './features/AddNotes.js';
import { getAllNotes } from './features/GetNotes.js';

export default function App() {
  const [draft, setDraft] = useState('');
  const [notes, setNotes] = useState([]);
  const [message, setMessage] = useState('Notes are saved in your browser for offline access.');

  async function loadNotes() {
    try {
      const storedNotes = await getAllNotes();
      setNotes(storedNotes);
      setMessage(storedNotes.length ? `Loaded ${storedNotes.length} saved note${storedNotes.length === 1 ? '' : 's'}.` : 'No saved notes yet.');
    } catch (error) {
      setMessage(error.message || 'Unable to load notes.');
    }
  }

  useEffect(() => {
    void loadNotes();
  }, []);

  async function handleAdd(event) {
    event.preventDefault();
    const text = draft.trim();

    if (!text) {
      setMessage('Please enter a note before saving.');
      return;
    }

    try {
      await addNote(text);
      setDraft('');
      const storedNotes = await getAllNotes();
      setNotes(storedNotes);
      setMessage('Note saved locally.');
    } catch (error) {
      setMessage(error.message || 'Unable to save the note.');
    }
  }

  async function handleLoad() {
    await loadNotes();
  }

  return <main className="app">
    <header><span className="eyebrow">Weekly Checkpoint 2 • Starter</span><h1>Offline Notes App</h1><p>Keep simple notes available without internet access.</p></header>
    <form onSubmit={handleAdd}><label htmlFor="note">New note</label><div className="input-row"><input id="note" placeholder="Type a note..." value={draft} onChange={e => setDraft(e.target.value)} /><button type="submit">Add</button></div></form>
    <div className="notes-head"><h2>Saved notes</h2><button className="secondary" onClick={handleLoad}>Refresh</button></div>
    <p role="status" className="message">{message}</p>
    <ul>{notes.map(note => <li key={note.id}>{note.text}</li>)}</ul>
    {!notes.length && <p className="empty">No loaded notes yet.</p>}
  </main>;
}
