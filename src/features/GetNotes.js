import { openDB } from '../db/openDB.js';

export async function getAllNotes() {
  const db = await openDB();
  const transaction = db.transaction('notes', 'readonly');
  const store = transaction.objectStore('notes');

  return new Promise((resolve, reject) => {
    const request = store.getAll();

    request.onsuccess = () => {
      resolve((request.result || []).sort((a, b) => Number(a.id ?? 0) - Number(b.id ?? 0)));
    };

    request.onerror = () => {
      reject(request.error || new Error('Unable to load notes.'));
    };

    transaction.onerror = () => {
      reject(transaction.error || new Error('Unable to load notes.'));
    };

    transaction.onabort = () => {
      reject(transaction.error || new Error('Unable to load notes.'));
    };
  });
}
