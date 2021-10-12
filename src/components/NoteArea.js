import { useState } from "react";
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import Zoom from '@material-ui/core/Zoom'

const NoteArea = props => {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [expanded, setExpanded] = useState(false)

  const handleChange = event => {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  const submitNote = event => {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  const expand = ()=> setExpanded(true)

  return (
    <div>
      <form className="create-note">
        <textarea
        onClick={expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="{expanded ? 5 : 1}"
        />
        <Zoom in={expanded}>
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default NoteArea;
