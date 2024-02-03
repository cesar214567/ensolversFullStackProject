import React, { useEffect, useState } from "react"
import { getNotes } from "../api/notes";
import { Link, useNavigate, use, useSearchParams } from "react-router-dom";

const NotesLayout =  ({userInfo}) => {
    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [categoryId,setCategoryId] = useState(searchParams.get("category"));
    const [active, setActive] = useState(searchParams.get("active"));
    console.log(categoryId);
    useEffect(()=>{
        getNotes(userInfo.jwt,setNotes,active,categoryId);
    },[]);
    

    const onButtonClick = () =>{
        navigate("/dashboard/notes/new", {userInfo})
    }
    console.log(notes);
    return (
            <div class="col s10"> 
                <div class="container">
                    <input
                        className={"inputButton"}
                        type="button"
                        onClick={onButtonClick}
                        value={"+"} />
                    {notes.map((note)=> (
                        <div class="card horizontal" key={note.id}>
                            <div class="card-stacked">
                                <div class="card-content">
                                    <p>{note.post}</p>
                                </div>
                                <div class="card-action">
                                    <Link to={{pathname: '/dashboard/notes/'+note.id, state:{"userInfo":userInfo}}} > Check Post </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    );
}

export default NotesLayout