"use client";

export function NavHeaderLayout() {


    const handleLogout = async() => {
        window.location.href='/login'
    }
    
    return (
        <div className="navbar-container container-fluid">
          
            <ul className="nav-right">
                <li className="user-profile header-notification">
                    <a href="#!" className="waves-effect waves-light">
                        <span>Admin</span>
                        <i className="ti-angle-down"></i>
                    </a>
                    <ul className="show-notification profile-notification">
                        <li className="waves-effect waves-light">
                            <a href="#!">
                                <i className="ti-settings"></i> Settings
                            </a>
                        </li>
                        <li className="waves-effect waves-light">
                            <a href="user-profile.html">
                                <i className="ti-user"></i> Profile
                            </a>
                        </li>
                        <li className="waves-effect waves-light">
                            <a href="email-inbox.html">
                                <i className="ti-email"></i> My Messages
                            </a>
                        </li>
                        <li className="waves-effect waves-light">
                            <a href="auth-lock-screen.html">
                                <i className="ti-lock"></i> Lock Screen
                            </a>
                        </li>
                        <li className="waves-effect waves-light">
                            <span onClick={handleLogout}>
                                <i className="ti-layout-sidebar-left"></i> Logout
                            </span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
