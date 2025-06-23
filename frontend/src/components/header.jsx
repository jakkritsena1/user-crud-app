import '../assets/css/header.css';

export default function Header() {
    return (
        <header className="header-nav">
            <div className="container">
                <div className="nav-container">
                    <div className="nav-logo">
                        <a href="/" className="logo"><img src="" alt="logo"></img></a>
                    </div>
                    <ul className="ui-item">
                        <li><a >Name</a></li>
                        <li><a >Role</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}