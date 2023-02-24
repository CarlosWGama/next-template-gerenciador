"use client";

import { usePathname } from "next/navigation";



export default function NavLayout() {
    //@ts-ignore
    const [ admin, module ] = usePathname().split('/')

    // =====================================================================
    return (
        <nav className="pcoded-navbar">
        <div className="sidebar_toggle"><a href="#"><i className="icon-close icons"></i></a></div>
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
                            <a href="{{route('admin.usuarios.edicao', ['id' => session('usuario')->id])}}"><i className="ti-user"></i>Perfil</a>
                            <a href="{{route('logout"><i className="ti-layout-sidebar-left"></i>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
            

            {/*-- MACRO ---- GERENCIAMENTO------  -*/}
            <div className="pcoded-navigation-label">Gerenciamento</div>

            {/* Dashboard */}
            <ul className="pcoded-item pcoded-left-item">
                <li className={module == 'admin' ? 'active' : ''}>
                    <a href="{{route('admin.dashboard')}}" className="waves-effect waves-dark">
                        <span className="pcoded-micon"><i className="ti-dashboard"></i><b>D</b></span>
                        <span className="pcoded-mtext">Dashboard</span>
                        <span className="pcoded-mcaret"></span>
                    </a>
                </li>
            </ul>

            {/* Contatos */}
            <ul className="pcoded-item pcoded-left-item">
                <li className={module == 'usuarios' ? 'active' : ''}>
                    <a href="{{route('admin.contatos" className="waves-effect waves-dark">
                        <span className="pcoded-micon"><i className="ti-instagram"></i><b>C</b></span>
                        <span className="pcoded-mtext">Contatos/Redes Sociais</span>
                        <span className="pcoded-mcaret"></span>
                    </a>
                </li>
            </ul>
            
            {/* Usuário */}
            <ul className="pcoded-item pcoded-left-item">
                <li className="@if(isset($menu) && $menu=='usuarios') active @endif pcoded-hasmenu">
                    <a href="#" className="waves-effect waves-dark">
                        <span className="pcoded-micon"><i className="ti-user"></i><b>U</b></span>
                        <span className="pcoded-mtext">Usuário</span>
                        <span className="pcoded-mcaret"></span>
                    </a>
                    <ul className="pcoded-submenu">
                        <li className=" ">
                            <a href="{{route('admin.usuarios.novo" className="waves-effect waves-dark">
                                <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                <span className="pcoded-mtext">Novo</span>
                                <span className="pcoded-mcaret"></span>
                            </a>
                        </li>
                        <li className="">
                            <a href="{{route('admin.usuarios.listar" className="waves-effect waves-dark">
                                <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                <span className="pcoded-mtext">Listar</span>
                                <span className="pcoded-mcaret"></span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>

            {/* MACRO ---- PREFEITURA------  */}
            <div className="pcoded-navigation-label">Prefeitura</div>
            
            {/* Páginas */}
            <ul className="pcoded-item pcoded-left-item">
                <li className="@if(isset($menu) && $menu=='paginas') active @endif pcoded-hasmenu">
                    <a href="#" className="waves-effect waves-dark">
                        <span className="pcoded-micon"><i className="ti-world"></i><b>Pag</b></span>
                        <span className="pcoded-mtext">Páginas</span>
                        <span className="pcoded-mcaret"></span>
                    </a>
                    <ul className="pcoded-submenu">
                        <li className=" ">
                            <a href="{{route('admin.prefeitura.pagina', 'localizacao" className="waves-effect waves-dark">
                                <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                <span className="pcoded-mtext">Localização</span>
                                <span className="pcoded-mcaret"></span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="{{route('admin.prefeitura.pagina', 'historia" className="waves-effect waves-dark">
                                <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                <span className="pcoded-mtext">Historia</span>
                                <span className="pcoded-mcaret"></span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="{{route('admin.prefeitura.pagina', 'prefeito" className="waves-effect waves-dark">
                                <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                <span className="pcoded-mtext">Prefeito</span>
                                <span className="pcoded-mcaret"></span>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="{{route('admin.prefeitura.pagina', 'secretarias" className="waves-effect waves-dark">
                                <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                <span className="pcoded-mtext">Secretarias</span>
                                <span className="pcoded-mcaret"></span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>

        </div>
    </nav>
    )
}