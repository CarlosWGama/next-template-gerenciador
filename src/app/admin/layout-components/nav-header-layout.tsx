"use client";

import { useUsuarioService } from "../../../services/usuarios.services";

export function NavHeaderLayout() {


    const usuarioSrv = useUsuarioService();
    const usuario = usuarioSrv.getUsuarioLogado();

    const handleLogout = async() => {
        usuarioSrv.logout();
        window.location.href='/login'
    }
    
    return (
        <div className="navbar-container container-fluid">
          
            <ul className="nav-right">
                <li className="user-profile header-notification">
                    <a href="#!" className="waves-effect waves-light">
                        <span>{usuario?.nome}</span>
                        <i className="ti-angle-down"></i>
                    </a>
                    <ul className="show-notification profile-notification">
                        <li className="waves-effect waves-light">
                            <a href="user-profile.html">
                                <i className="ti-user"></i> Profile
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
