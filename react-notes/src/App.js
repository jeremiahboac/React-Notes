import { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import NotesList from "./components/NotesList"
import Search from "./components/Search"
import Header from "./components/Header"

const App = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "This is my first note!",
    date: "08/23/2022"
  },
  {
    id: nanoid(),
    text: "This is my second note!",
    date: "08/23/2022"
  },
  {
    id: nanoid(),
    text: "This is my third note!",
    date: "08/24/2022"
  }
])

const [searchText, setSearchText] = useState("")
const [darkMode, setDarkMode] = useState(false)


useEffect(() => {
  const savedNotes = JSON.parse(localStorage.getItem("react-notes-data"));

  if(savedNotes) {
    setNotes(savedNotes)
  }
}, [])

useEffect(() => {
  localStorage.setItem("react-notes-data", JSON.stringify(notes));
}, [notes])

const addNote = (text) => {
  const getDate = Date.now();
  const today = new Date(getDate)
  setNotes(prevNotes => {
    return [
      {
      id: nanoid(),
      text: text,
      date: today.toLocaleDateString()
    }, ...prevNotes]
  })
}

const deleteNote = (id) => {
  setNotes(prevNotes => {
    return prevNotes.filter(note => note.id !== id)
  })
}

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} darkMode={darkMode}/>
        <Search 
          handleSearchNote={setSearchText}
        />
        <NotesList 
          notes={notes.filter(note => note.text.toLowerCase().includes(searchText))} 
          handleAddNote={addNote} 
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  )
}

export default App