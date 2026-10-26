# Offline Notes App — Learning Starter (not a finished submission)

This project is an intentionally incomplete starter for IA730001 Weekly Checkpoint 2. You must implement and test the assessed functionality yourself.

## Start
1. Install Node.js LTS.
2. In this folder run `npm install`.
3. Run `npm run dev` and open the printed URL.
4. Implement the TODOs in `src/db/openDB.js`, `src/features/AddNotes.js`, `src/features/GetNotes.js`, `src/App.jsx`, `public/service-worker.js`, `src/main.jsx`, and `vite.config.js`.
5. Run `npm run build` and `npm run preview` to test a production version (service worker/offline behavior is best tested on localhost with production output).

## Manual testing
- Add 2 notes, refresh and confirm they persist.
- In Developer Tools > Application > IndexedDB confirm NotesDB > notes contains them.
- In Developer Tools > Application > Cache Storage confirm static resources are cached.
- Load app once online, switch DevTools > Network > Offline, refresh and confirm notes are still visible.
- Capture real screenshots; don't use mock screenshots as evidence.
- Add your own GitHub link to report after pushing your repo.

## Important brief clarification
The supplied assessment text says 'React 7.0'/'React 8.0', but those are not current React version labels. This starter uses React 19 and a SWC Vite plugin; confirm required versions with the lecturer if necessary.

## Academic integrity
The assessment disallows submission of AI-generated code as original work. This starter intentionally leaves core marked tasks incomplete; complete and explain them yourself, and follow disclosure requirements.
