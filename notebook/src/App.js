
import './App.css';
import NoteBook from './components/Note/NoteBook';
import NoteProvider from './components/Store/NoteProvider';
import NotesContext from './components/Store/Notes-context';

function App() {
  return <NoteProvider>
      <NoteBook />
  </NoteProvider>
}

export default App;
