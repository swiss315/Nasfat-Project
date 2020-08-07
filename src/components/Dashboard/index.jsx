import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './sidebar/index.jsx'
import Navbar from './Navbar/index.jsx'
import Empowerment from './Empowerment/index.jsx'
import Multimedia from './Multimedia/index.jsx'
import Trivia from './Trivia/index.jsx'
import Mainboard from './Mainboard/index.jsx'

// function Dashboard() {
const components = {
    0: <Empowerment />,
    1: <Multimedia />,
    2: <Trivia />,
    3: <Mainboard />

};

const text = ["Empowerment", "Multimedia", "Trivia", "Mainboard"];

const Dashboard = (props) => {
    console.log('dashboardProps===>', props)
    const getComponent = () => {
        let funcUniversal = "";
        let component = "";
        text.forEach((item, i) => {
            for (let key of Object.keys(components)) {
                funcUniversal =
                    props.location.pathname === props.match.path + "/" + item;
                if (Number(key) === i && funcUniversal) {
                    // eslint-disable-next-line
                    funcUniversal
                        ? (component = components[key])
                        : (component = component);
                }
            }
        });
        return component;
    };

    const getText = () => {
        let title, navTitle;
        const newText = [...text];
        newText.forEach((item, i) => {
            title = props.location.pathname === props.match.path + "/" + item;
            if (title) {
                title
                    ? (navTitle = item.charAt(0).toUpperCase() + item.slice(1))
                    : (navTitle = "");
            }
        });
        return navTitle;
    };


    return (
        <div className="row wd-100">
            <Sidebar props={props} />
            <div className="col-lg-10 col-md-9">
                <Navbar />
                <div className="row">
                    {getComponent()}
                </div>
            </div>
        </div>
    )
}

export default Dashboard

