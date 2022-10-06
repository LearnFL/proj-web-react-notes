import React, {useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from './createArea'

export default function App(){
    const [items, setItems] = useState([]);

    function addNote(note){
        setItems((previous)=>{
            return [...previous, note];
        });
    }

    function delNote(id){
        setItems((previous)=>{
            return previous.filter((item, idx)=>{
                return idx !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            {items.map((item, idx)=>{
               return <Note key={idx} id={idx} title={item.title} content={item.content} delFunc={delNote}/>; 
            })}
            <Footer />
        </div>
    );
}