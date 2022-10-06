import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });
    
    const [error, setError] = useState({
      color: 'red',
      display: 'none',
    });

    function getInput(e) {
        const {name, value} = e.target;
        setInputText(previous=>{
            return {...previous, [name]: value};
        });
    }

    const [isExpended, setisExpended] = useState(false);

    function addNote(e){
      if (inputText.title && inputText.content !== ""){
        props.onAdd(inputText);
        setInputText({title: "", content: ""});
        e.preventDefault();
      } else{
          setError({
            color: 'red',
            display: 'block',
            position: 'absolute',
            backgroundColor: 'white',
            lineHeight: '30px',
            bottom:'10px',
          });

          setTimeout(()=>{
            setError({
              display: 'none',
            });
          }, 2000);
      }
    }

    function formTransition(){
      setisExpended(true);
    }

  return (
    <div>
      <form className="create-note">
        {isExpended &&  
          <input type="text" onChange={(e) => getInput(e)} value={inputText.title} name="title" placeholder="Title" required/>
        }
        <textarea onClick={formTransition} rows={isExpended ? 3:1} onChange={(e) => getInput(e)} value={inputText.content} name="content" placeholder="Take a note..." required/>
        <p style={error}>All field must be entered!</p>
        <Zoom in={isExpended ? true:false}>
          <Fab onClick={addNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
