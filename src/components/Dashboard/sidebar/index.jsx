import React from 'react';
import './sidebar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { prop } from 'react-bootstrap/esm/Image';
import Empowerment from './../Empowerment/index.jsx'
import Multimedia from './../Multimedia/index.jsx'
import Trivia from './../Trivia/index.jsx'

function Sidebar({props}) {
    console.log ('propppppssssss ==> ', props)
    return (
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 wd-15 d-md-block sidebar collapse">

            <div className="sidebar-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item" onClick={() => props.history.push(props.match.path + "/dashboard")}>

                        <div className="nav-link active" >
                            <span data-feather="home"></span>
                                        Dashboard <span className="sr-only">(current)</span>
                        </div>
                    </li>
                    <li className="nav-item" onClick={() => props.history.push(props.match.path + "/Multimedia")}>
                        <div className="nav-link" >
                            <span data-feather="file"></span>
                                    Multimedia
                                </div>
                    </li>
                    <li className="nav-item" onClick={() => props.history.push(props.match.path + "/Trivia")}>
                        <div className="nav-link" >
                            <span data-feather="shopping-cart"></span>
                                    Trivia
                                </div>
                    </li>
                    <li className="nav-item" onClick={() => props.history.push(props.match.path + "/Empowerment")}>
                        <div className="nav-link" >
                            <span data-feather="users"></span>
                                    Empowerment
                                </div>
                    </li>
                    <li className="nav-item logout">
                        <div className="nav-link" >
                            <span data-feather="users"></span>
                                    log out
                                </div>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Sidebar