import React, { useEffect, useState } from "react"
import { useNavigate,useParams } from "react-router-dom";
import { createCategory } from "../api/categories";

const CreateCategoriesLayout =  (props) => {
    const {userInfo} = props;
    const { id } = useParams();
    const [name,setName] = useState("");

    const navigate = useNavigate();
    
    const onUpdateButtonCLick = () => {
        createCategory(userInfo.jwt,{
            name: name,
        });
        navigate("/dashboard/categories", {userInfo:userInfo})
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
                                        <div class="input-field col s12">
                                            <input placeholder="temp" id="name" type="text" class="validate"
                                                onChange={ev => setName(ev.target.value)}/>
                                            <label for="name"></label>
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

export default CreateCategoriesLayout