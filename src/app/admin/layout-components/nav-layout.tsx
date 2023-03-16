"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";



export default function NavLayout() {
    //@ts-ignore
    const [ admin, module ] = usePathname().split('/')

    
    const handleLogout = async() => {

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
                <li className={module == 'dashboard' ? 'active pcoded-hasmenu' : 'pcoded-hasmenu'}>
                    <a href="#" className="waves-effect waves-dark">
                        <span className="pcoded-micon"><i className="ti-user"></i><b>U</b></span>
                        <span className="pcoded-mtext">Usuário</span>
                        <span className="pcoded-mcaret"></span>
                    </a>
                    <ul className="pcoded-submenu">
                        <li className="">
                            <Link href="/admin/usuarios/novo" className="waves-effect waves-dark">
                                <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                <span className="pcoded-mtext">Novo</span>
                                <span className="pcoded-mcaret"></span>
                            </Link>
                        </li>
                        <li className="">
                            <Link href="/admin/usuarios/listar" className="waves-effect waves-dark">
                                <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                <span className="pcoded-mtext">Listar</span>
                                <span className="pcoded-mcaret"></span>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>

            {/* MACRO ---- PREFEITURA------  */}
            <div className="pcoded-navigation-label">Prefeitura</div>
            
            {/* Páginas */}
            <ul className="pcoded-item pcoded-left-item">
                <li className="@if(isset($menu) && $menu=='paginas') active @endif pcoded-hasmenu">
                    <Link href="#" className="waves-effect waves-dark">
                        <span className="pcoded-micon"><i className="ti-world"></i><b>Pag</b></span>
                        <span className="pcoded-mtext">Páginas</span>
                        <span className="pcoded-mcaret"></span>
                    </Link>
                    <ul className="pcoded-submenu">
                        <li className=" ">
                            <Link href="{{route('admin.prefeitura.pagina', 'localizacao" className="waves-effect waves-dark">
                                <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                <span className="pcoded-mtext">Localização</span>
                                <span className="pcoded-mcaret"></span>
                            </Link>
                        </li>
                        <li className=" ">
                            <Link href="{{route('admin.prefeitura.pagina', 'historia" className="waves-effect waves-dark">
                                <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                <span className="pcoded-mtext">Historia</span>
                                <span className="pcoded-mcaret"></span>
                            </Link>
                        </li>
                        <li className=" ">
                            <Link href="{{route('admin.prefeitura.pagina', 'prefeito" className="waves-effect waves-dark">
                                <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                <span className="pcoded-mtext">Prefeito</span>
                                <span className="pcoded-mcaret"></span>
                            </Link>
                        </li>
                        <li className=" ">
                            <Link href="{{route('admin.prefeitura.pagina', 'secretarias" className="waves-effect waves-dark">
                                <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                <span className="pcoded-mtext">Secretarias</span>
                                <span className="pcoded-mcaret"></span>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>

        </div>
    </nav>
    )
}