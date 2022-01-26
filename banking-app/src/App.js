import {useState} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import Home from './components/Home';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import AllData from './components/AllData';
import CreateAccount from './components/CreateAccount';
import './App.css';

function App() {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const linkElementsData = [
        {
            to: '/',
            text: 'Home',
        },
        {
            to: '/deposit',
            text: 'Deposit',
        },
        {
            to: '/withdraw',
            text: 'Withdraw',
        },
        {
            to: '/all-data',
            text: 'All Data',
        },
        {
            to: '/create-account',
            text: 'Create Account',
        },
    ]

    const handleOnClick = (index) => {
        setCurrentTabIndex(index);
    }

    const linkElements = linkElementsData.map((link, i) => {
            return (
                <li className={"nav-item " + (currentTabIndex === i ? "active" : "")}>
                    <Link className={"nav-link"} onClick={() => handleOnClick(i)} to={link.to}>{link.text}</Link>
                </li>
            )
        })


    return (
        <div className="container">
            <nav className="justify-content-center py-5">
                <h1 className="text-center">Banking</h1>
                <div className="d-flex justify-content-center">
                    <ul className="nav nav-pills">
                        {linkElements}
                    </ul>
                </div>

            </nav>
            <div className="row justify-content-center pt-5">
                <div className="col-8">
                    <Routes>
                        <Route className="nav-link" path="/" element={<Home />} />
                        <Route className="nav-link" path="/deposit" element={<Deposit />} />
                        <Route className="nav-link" path="/withdraw" element={<Withdraw />} />
                        <Route className="nav-link" path="/all-data" element={<AllData />} />
                        <Route className="nav-link" path="/create-account" element={<CreateAccount />} />
                    </Routes>
                </div>
            </div>
        </div>

    );
}

export default App;
