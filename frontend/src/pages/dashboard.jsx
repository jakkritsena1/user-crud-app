import Table from '../components/table.jsx';
import Table_hr from '../components/table-hr.jsx';
import Table_admin from '../components/table-admin.jsx';
import { useState } from 'react';
import '../assets/css/header.css';

export default function Dashboard() {
    const [currentMenu, setCurrentMenu] = useState("sale");

    const switchRole = () => {
        if (currentMenu === "sale") return <Table />;
        if (currentMenu === "hr") return <Table_hr />;
        if (currentMenu === "admin") return <Table_admin />;
        return null;
    }

    return (
        <>
            <header className="header-nav">
                <div className="container">
                    <div className="nav-container">
                        <div className="nav-logo">
                            <a href="/" className="logo"><img src="" alt="logo"></img></a>
                        </div>
                        <ul className="ui-item">
                            <li onClick={() => setCurrentMenu("sale")}><a >sale</a></li>
                            <li onClick={() => setCurrentMenu("hr")}><a >hr</a></li>
                            <li onClick={() => setCurrentMenu("admin")}><a >admin</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            {switchRole()}
        </>
    )
}