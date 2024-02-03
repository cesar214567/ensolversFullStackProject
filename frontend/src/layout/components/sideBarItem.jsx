import React, { useParams } from "react"
import { Link } from "react-router-dom";

const SideBarItem =  ({module, userInfo}) => {
    return (
        <div class="card horizontal">
            <div class="card-stacked">
                <div class="card-action">
                    <Link to={{pathname: "/dashboard/"+module, state:{"userInfo":userInfo} }} > {module}</Link>
                </div>
            </div>
        </div>
    );
}

export default SideBarItem