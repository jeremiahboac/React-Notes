import { useState } from "react"

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState("")
    const characterLimit = 200;

    const handleChange = (event) => {
      const text = event.target.value
      if(characterLimit - text.length >= 0) {
        setNoteText(text)
      }
    }

    const handleSaveClick = () => {
      if(noteText.trim().length > 0) {
        handleAddNote(noteText)
        setNoteText("")
      }

    }

    return (
        <div className="note new">
            <textarea rows="8" cols="10" placeholder="Type to add a note..." 
            onChange={handleChange} 
            value={noteText}
            >

            </textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length } character(s) remaining.</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote