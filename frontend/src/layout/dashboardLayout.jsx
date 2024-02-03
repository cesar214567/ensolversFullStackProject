import { Link, Route, Routes } from "react-router-dom";
import NotesLayout from "./notesLayout";
import NoteLayout from "./noteLayout";
import CreateNoteLayout from "./createNoteLayout";
import UpdateNoteLayout from "./updateNoteLayout";
import SideBarItem from "./components/sideBarItem";
import CategoriesLayout from "./categoriesLayout";
import CreateCategoriesLayout from "./createCategoriesLayout";
const DashboardLayout =  ({userInfo}) => {
    console.log(userInfo);
    return (
        <div class="row left-align">
            <div class="col s2">
                <SideBarItem module="notes"></SideBarItem>
                <SideBarItem module="categories"></SideBarItem>
            </div>
            <div class="col s10"> 
                <div class="container">
                    <Routes>
                        <Route path="/notes" element={<NotesLayout userInfo={userInfo}/>} />
                        <Route path="/notes/:id" element={<NoteLayout userInfo={userInfo} />} />
                        <Route path="/notes/new" element={<CreateNoteLayout userInfo={userInfo}  />} />
                        <Route path="/notes/:id/update" element={<UpdateNoteLayout userInfo={userInfo}  />} />
                        <Route path="/categories" element={<CategoriesLayout userInfo={userInfo}/>} />
                        <Route path="/categories/new" element={<CreateCategoriesLayout userInfo={userInfo}/>} />
                    </Routes>
                    
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout