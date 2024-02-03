import React, { useEffect, useState } from "react"
import { createNote } from "../api/notes";
import { useNavigate,useParams } from "react-router-dom";
import { getCategories } from "../api/categories";
import M from 'materialize-css';

const UpdateNoteLayout =  (props) => {
    const {userInfo} = props;
    const { id } = useParams();
    const [post,setPost] = useState("");
    const [active,setActive] = useState(true);
    const [category,setCategory] = useState({});
    const [categories,setCategories] = useState([]);

    const navigate = useNavigate();
    useEffect(()=>{
        getCategories(userInfo.jwt,setCategories);
    },[]);
    
    M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'),
        {
            container:document.querySelector("#dropdown-container"),
        }
    );
    const onUpdateButtonCLick = () => {
        console.log(id);
        createNote(userInfo.jwt,{
            id:id,
            post: post,
            categoryId:category.id,
            active:active
        });
        navigate("/dashboard/notes", {userInfo:userInfo})
    }


    return (
        <div class="col s10"> 
            <div class="card horizontal">
                <div class="card-stacked">
                    <div class="row">
                        <form class="col s12">
                            <div class="row">
                                <div class="col s1"/>
                                <div class="col s10">
                                    <div class="row">
                                        <div class="input-field col s6">
                                            <input placeholder="post" id="post" type="text" class="validate"
                                                onChange={ev => setPost(ev.target.value)}/>
                                            <label for="post"></label>
                                        </div>
                                        <div class="input-field col s6">
                                            <label className="col s2">
                                                <input type="checkbox" 
                                                    class={active? "filled-in":""} 
                                                    defaultChecked={active}
                                                    onClick={() => setActive(!active)} />
                                                <span>active</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col s12" >
                                            <div id="dropdown-container">
                                                <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>category: {category? category.name:""}</a>
                                                <ul id='dropdown1' class='dropdown-content'>
                                                    {categories.map((category)=> (
                                                        <li><a href="#!" onClick={() => setCategory({id:category.id,name:category.name})}>{category.name}</a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className={"inputContainer"}>
                                            <input
                                                className={"inputButton"}
                                                type="button"
                                                onClick={onUpdateButtonCLick}
                                                value={"Log in"} />
                                        </div>
                                    </div>
                                </div>
                                <div class="col s1"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateNoteLayout