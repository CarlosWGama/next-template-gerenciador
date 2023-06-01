"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useUsuarioService } from "../../../services/usuarios.services";



export default function NavLayout() {
    //@ts-ignore
    const [ admin, module ] = usePathname().split('/')
    const router = useRouter();
    const usuarioSrv = useUsuarioService();

    
    const handleLogout = async() => {
        usuarioSrv.logout();
        window.location.href='/login'
    }

    // =====================================================================
    return (
        <nav className="pcoded-navbar">
        <div className="sidebar_toggle"><Link href="#"><i className="icon-close icons"></i></Link></div>
        <div className="pcoded-inner-navbar main-menu">
            <div className="">
                <div className="main-menu-header">
                    <div className="user-details">
                        <br/>
                        <br/>
                        {/* <span id="more-details">{{session('usuario')->nome}}<i className="fa fa-caret-down"></i></span> */}
                    </div>
                </div>
                <div className="main-menu-content">
                    <ul>
                        <li className="more-details">
                            <Link href="{{route('admin.usuarios.edicao', ['id' => session('usuario')->id])}}"><i className="ti-user"></i>Perfil</Link>
                            <span onClick={handleLogout}><i className="ti-layout-sidebar-left"></i>Logout</span>
                        </li>
                    </ul>
                </div>
            </div>
            

            {/*-- MACRO ---- GERENCIAMENTO------  -*/}
            <div className="pcoded-navigation-label">Gerenciamento</div>

            {/* Dashboard */}
            <ul className="pcoded-item pcoded-left-item">
                <li className={module == 'dashboard' ? 'active' : ''}>
                    <Link href="/admin/dashboard" className="waves-effect waves-dark">
                        <span className="pcoded-micon"><i className="ti-dashboard"></i><b>D</b></span>
                        <span className="pcoded-mtext">Dashboard</span>
                        <span className="pcoded-mcaret"></span>
                    </Link>
                </li>
            </ul>

            {/* Usuário */}
            <ul className="pcoded-item pcoded-left-item">
                <li className={module == 'dashboard' ? 'active' : ''}>
                    <Link href="/admin/usuarios/listar" className="waves-effect waves-dark">
                        <span className="pcoded-micon"><i className="ti-user"></i><b>U</b></span>
                        <span className="pcoded-mtext">Usuário</span>
                        <span className="pcoded-mcaret"></span>
                    </Link>
                </li>
            </ul>

            {/* MACRO ---- PREFEITURA------  */}
            <div className="pcoded-navigation-label">Outras configurações...</div>
            

        </div>
    </nav>
    )
}