import React from "react"
import { Link, useNavigate, BrowserRouter } from "react-router-dom";

const HomeLayout = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate();
    
    const onButtonClick = () => {
        // You'll update this function later
    }

    return (
        <div>
            <div class="container">
                <div class="section no-pad-bot" id="index-banner">
                    <div class="container">
                    <h1 class="header center orange-text">Ensolver Project</h1>
                    <div class="row center">
                        <h5 class="header col s12 light">A notes management fullstack app</h5>
                    </div>
                    <div class="row center">
                        <Link to="#" className="btn-large waves-effect waves-light orange">Get Started</Link>
                    </div>

                    </div>
                </div>
                <div class="section">
                    <div class="row">
                        <div class="col s12 m4">
                        <div class="icon-block">
                            <h2 class="center light-blue-text"><i class="material-icons">flash_on</i></h2>
                            <h5 class="center">Professionalism</h5>

                            <p class="light">We are a team of professionals that love complex engineering problems and 
                            will do what is necessary to implement your ideas. Framework and library customization are 
                            part of our daily engineering process.</p>
                        </div>
                        </div>

                        <div class="col s12 m4">
                        <div class="icon-block">
                            <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
                            <h5 class="center">Permanent Communication</h5>

                            <p class="light">Communication is key to a project success, therefore our development and
                             support teams will provide the best experience using modern communication tools to show 
                             you progress about the project they are working on.</p>
                        </div>
                        </div>

                        <div class="col s12 m4">
                        <div class="icon-block">
                            <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
                            <h5 class="center">On-time support</h5>

                            <p class="light">Our teams understand and adapt to your tight schedule. We will adapt to 
                            your SLA to support your customer base and provide the best support level so that your 
                            customers are always happy.</p>
                        </div>
                        </div>
                    </div>

                    </div>
            </div>
        </div>
    );
}

export default HomeLayout