"use client";
import { useEffect, useState } from "react";
import { useContextLayout } from "../../../../contexts/layout"
import { useUsuarioService } from "../../../../services/usuarios.services";
import { Usuario } from "../../../../model/usuario";
import Link from "next/link";
import { useFlashData } from "../../../../helpers/helpers";

export default function Listar(props:any)  {

    const { setChamada } = useContextLayout();
    const usuariosSrv = useUsuarioService();
    const [ usuarios, setUsuarios ] = useState<Usuario[]>([]);
    const [ usuarioExcluir, setUsuarioExcluir ] = useState<Usuario|null>(null);
    const [ sucesso, setSucesso ] = useState<null|string>(null)

    // =============================================================
    const buscarUsuarios = async () => {
        const resposta = await usuariosSrv.buscar()
        if (resposta.sucesso)
            setUsuarios(resposta.usuarios);
    }
    // =======
    const handleExcluir = async () => {
        await usuariosSrv.excluir(usuarioExcluir.id)
        setSucesso('Usuario excluído com sucesso!');
        await buscarUsuarios();

    }
    // =======
    useEffect(() => {
        setChamada("Listar Usuários");
        buscarUsuarios();

        //Flash data
        const flashSucesso = useFlashData('sucesso');
        if (flashSucesso) setSucesso(flashSucesso);

    }, [])

    // ==============================================================
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h5>Usuários Cadastrados</h5>
                    <br/>
                    
                    <Link href="/admin/usuarios/novo" className="btn waves-effect waves-light btn-success">
                        Cadastrar Novo usuário
                    </Link>
                    <br/>


                </div>
                <div className="card-block table-border-style">
                    
                    {/* MENSAGEM DE SUCESSO */}
                    {sucesso && <p className="alert alert-success text-center"> {sucesso} </p>}
                    {/* FIM MENSAGEM DE SUCESSO */}

                    <div className="table-responsive">
                    
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>Admin</th>
                                    <th>Opções</th>
                                </tr>
                            </thead>

                            <tbody>
                                { usuarios.map(usuario => (
                                    <tr>
                                        <th scope="row">#{usuario.id}</th>
                                        <td>{usuario.nome}</td>
                                        <td>{usuario.email}</td>
                                        <td>
                                            {usuario.admin && <span className="alert alert-success">SIM</span>}
                                            {!usuario.admin && <span className="alert alert-danger">NÃO</span>}
                                        </td>
                                        <td>
                                            {/* EDITAR */}
                                            <Link href={`/admin/usuarios/editar/${usuario.id}`} className="btn waves-effect waves-light btn-success">
                                                Editar
                                            </Link>
                                            {/* EXCLUIR */}
                                            <button className="btn waves-effect waves-light btn-danger" data-toggle="modal" data-target="#smallmodal" onClick={() => setUsuarioExcluir(usuario)}>
                                                Excluir
                                            </button>


                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>



                    {/* <!-- MODAL --> */}
                    <div className="modal fade" id="smallmodal" role="dialog" aria-labelledby="smallmodalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-sm" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="smallmodalLabel">Remover Usuário</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>
                                        Deseja Realmente excluir "{usuarioExcluir?.nome}"?
                                        </p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                        <button type="button" className="btn btn-primary btn-deletar"  data-dismiss="modal" onClick={handleExcluir}>Confirmar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- FIM MODAL --> */}
                    </div>
                </div>
            </div>
        </div>
    )

}