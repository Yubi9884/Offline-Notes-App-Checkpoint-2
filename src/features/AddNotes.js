import { openDB } from '../db/openDB.js';

export async function addNote(text) {
  const noteText = String(text ?? '').trim();

  if (!noteText) {
    throw new Error('Please enter a note before saving.');
  }

  const db = await openDB();
  const transaction = db.transaction('notes', 'readwrite');
  const store = transaction.objectStore('notes');

  return new Promise((resolve, reject) => {
    const request = store.add({ text: noteText, createdAt: Date.now() });

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error || new Error('Unable to save the note.'));
    };

    transaction.onerror = () => {
      reject(transaction.error || new Error('Unable to save the note.'));
    };

    transaction.onabort = () => {
      reject(transaction.error || new Error('Unable to save the note.'));
    };
  });
}
