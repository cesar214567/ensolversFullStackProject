import React, { useEffect, useState, useParams } from "react"
import { Link, useNavigate } from "react-router-dom";
import { deleteCategory, getCategories } from "../api/categories";

const CategoriesLayout =  ({userInfo}) => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        getCategories(userInfo.jwt,setCategories);
    },[]);
    const navigate = useNavigate();
    const onDeleteButtonCLick = (id) => {
        console.log(id);
        deleteCategory(userInfo.jwt,id);
        window.location.reload();
    }
    const onButtonClick = () =>{
        navigate("/dashboard/categories/new", {userInfo})
    }
    return (
            <div class="col s10"> 
                <div class="container">
                    <input
                        className={"inputButton"}
                        type="button"
                        onClick={onButtonClick}
                        value={"+"} />
                    {categories.map((category)=> (
                        <div class="card horizontal" key={category.id}>
                            <div class="card-stacked">
                                <div class="card-content">
                                    <div className="row">
                                        <p className="col s11 header4">{category.name}</p>
                                        <a href="#" onClick={() => onDeleteButtonCLick(category.id)} className="col s1 icons">
                                            🗑
                                        </a>
                                    </div>
                                    <p>{category.name}</p>
                                </div>
                                <div class="card-action">
                                    <Link to={{pathname: '/dashboard/notes', search:'?category='+category.id, state:{"userInfo":userInfo}}} > Check All Notes </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    );
}

export default CategoriesLayout