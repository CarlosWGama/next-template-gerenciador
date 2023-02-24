"use client";
import { useEffect } from "react";
import { useContextLayout } from "../../../contexts/layout"

export default function Dashboard(props:any)  {

    const { setChamada } = useContextLayout();

    // =============================================================
    useEffect(() => {
        setChamada("Dashboard");
    }, [])

    // ==============================================================
    return (
        <div className="row">

            {/* PREFEITURA */}
            <div className="col-xl-4 col-md-12">
                <h6>Prefeitura</h6>
                <div className="card mat-stat-card">
                    <div className="card-block">
                        <div className="row align-items-center b-b-default">
                            {/* USUARIOS */}
                            <div className="col-sm-6 b-r-default p-b-20 p-t-20">
                                <div className="row align-items-center text-center">
                                    <div className="col-4 p-r-0">
                                        <i className="far fa-user text-c-purple f-24"></i>
                                    </div>
                                    <div className="col-8 p-l-0">
                                        <h5>0</h5>
                                        <p className="text-muted m-b-0">Usuários</p>
                                    </div>
                                </div>
                            </div>
                            {/* NOTICIAS */}
                            <div className="col-sm-6 p-b-20 p-t-20 r-default">
                                <div className="row align-items-center text-center">
                                    <div className="col-4 p-r-0">
                                        <i className="far fa-file-alt text-c-red f-24"></i>
                                    </div>
                                    <div className="col-8 p-l-0">
                                        <h5>0</h5>
                                        <p className="text-muted m-b-0">Noticias</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            {/* FALE CONOSCO */}
                            <div className="col-sm-12 p-b-20 p-t-20">
                                <div className="row align-items-center text-center">
                                    <div className="col-4 p-r-0">
                                        <i className="fas fa-comments text-c-yellow f-24"></i>
                                    </div>
                                    <div className="col-8 p-l-0">
                                        <h5>0</h5>
                                        <p className="text-muted m-b-0">Fale Conosco (Aberto)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Turismo */}
            <div className="col-xl-4 col-md-12">
                <h6>Turismo</h6>

                <div className="card mat-stat-card">
                    <div className="card-block">
                        <div className="row align-items-center b-b-default">
                            {/* PRAIAS */}
                            <div className="col-sm-6 b-r-default p-b-20 p-t-20">
                                <div className="row align-items-center text-center">
                                    <div className="col-4 p-r-0">
                                        <i className="far fa-sun text-c-yellow f-24"></i>
                                    </div>
                                    <div className="col-8 p-l-0">
                                        <h5>0</h5>
                                        <p className="text-muted m-b-0">Praias</p>
                                    </div>
                                </div>
                            </div>
                            {/* EVENTOS */}
                            <div className="col-sm-6 p-b-20 p-t-20">
                                <div className="row align-items-center text-center">
                                    <div className="col-4 p-r-0">
                                        <i className="fas fa-calendar text-c-green f-24"></i>
                                    </div>
                                    <div className="col-8 p-l-0">
                                        <h5>0</h5>
                                        <p className="text-muted m-b-0">Eventos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            {/* IMAGENS */}
                            <div className="col-sm-6 p-b-20 p-t-20 b-r-default">
                                <div className="row align-items-center text-center">
                                    <div className="col-4 p-r-0">
                                        <i className="far fa-image text-c-red f-24"></i>
                                    </div>
                                    <div className="col-8 p-l-0">
                                        <h5>0</h5>
                                        <p className="text-muted m-b-0">Imagens</p>
                                    </div>
                                </div>
                            </div>
                            {/* VIDEOS */}
                            <div className="col-sm-6 p-b-20 p-t-20">
                                <div className="row align-items-center text-center">
                                    <div className="col-4 p-r-0">
                                        <i className="fas fa-film text-c-blue f-24"></i>
                                    </div>
                                    <div className="col-8 p-l-0">
                                        <h5>0</h5>
                                        <p className="text-muted m-b-0">Vídeos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card-block">
                        <div className="row align-items-center b-b-default">
                            {/* PASSEIOS */}
                            <div className="col-sm-6 b-r-default b-t-default p-b-20 p-t-20">
                                <div className="row align-items-center text-center">
                                    <div className="col-4 p-r-0">
                                        <i className="far fa-map text-c-purple f-24"></i>
                                    </div>
                                    <div className="col-8 p-l-0">
                                        <h5>0</h5>
                                        <p className="text-muted m-b-0">Passeios</p>
                                    </div>
                                </div>
                            </div>
                            {/* ONDE FICAR */}
                            <div className="col-sm-6 p-b-20 p-t-20 b-t-default ">
                                <div className="row align-items-center text-center">
                                    <div className="col-4   ">
                                        <i className="fas fa-hotel text-c-green f-24"></i>
                                    </div>
                                    <div className="col-8 p-l-0">
                                        <h5>0</h5>
                                        <p className="text-muted m-b-0">Onde ficar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            {/* ONDE COMER */}
                            <div className="col-sm-12 p-b-20 p-t-20">
                                <div className="row align-items-center text-center">
                                    <div className="col-4 p-r-0">
                                        <i className="far fa-lemon text-c-green f-24"></i>
                                    </div>
                                    <div className="col-8 p-l-0">
                                        <h5>0</h5>
                                        <p className="text-muted m-b-0">Onde Comer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

