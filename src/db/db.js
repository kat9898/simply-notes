import Dexie from 'dexie';

export const db = new Dexie('notesDatabase');
db.version(1).stores({
  notes: '++id, name, date, text', // Primary key and indexed props
});