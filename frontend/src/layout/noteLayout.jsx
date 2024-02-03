import React, { useEffect, useState } from "react"
import { deleteNote, getNote, updateNote } from "../api/notes";
import { Link,useNavigate,useParams } from "react-router-dom";

const NoteLayout =  (props) => {
    const {userInfo} = props;
    const { id } = useParams();
    const [note,setNote] = useState({});
    const [category,setCategory] = useState("");
    const navigate = useNavigate();
    console.log(id);
    useEffect(()=>{
        getNote(userInfo.jwt,id,setNote);
    },[]);

    const onDeleteButtonCLick = () => {
        console.log(id);
        deleteNote(userInfo.jwt,id);
        navigate("/dashboard/notes", {userInfo:userInfo})
    }

    const onArchiveButtonClick = () => {
        console.log(id);
        const updateParameters = {
            id: id,
            active:!note.active,
        }
        updateNote(userInfo.jwt,updateParameters);
        
    }
    return (
            <div class="col s10"> 
                <div class="container">
                        <div class="card horizontal">
                            <div class="card-stacked">
                                <div class="card-content mt-2">
                                    <div className="row">
                                        <p className="col s8 header4">{note.post}</p>
                                        <label className="col s2">
                                            <input type="checkbox" 
                                                class={note.active? "filled-in":""} 
                                                defaultChecked={note.active}
                                                onClick={onArchiveButtonClick} />
                                            <span>active</span>
                                            </label>
                                        <p className="col s1 icons">
                                            <Link to={{pathname:"/dashboard/notes/"+note.id+"/update", state:{"userInfo":userInfo}}} >✍</Link>
                                        </p>
                                        <a href="#" onClick={onDeleteButtonCLick} className="col s1 icons">
                                            🗑
                                        </a>
                                    </div>
                                     
                                    <p>category: {note.category ? note.category.name : ""}</p>
                                    
                                </div>
                            </div>
                        </div>
                  
                </div>
            </div>
    );
}

export default NoteLayout