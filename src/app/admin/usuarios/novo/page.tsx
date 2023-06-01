"use client";

import { useEffect, useState } from "react";
import { useContextLayout } from "../../../../contexts/layout";
import { useUsuarioService } from "../../../../services/usuarios.services";
import { ErrorMessage, Field, Form, Formik } from "formik";

import * as Yup from 'yup';
import { Usuario } from "../../../../model/usuario";
import { useRouter } from "next/navigation";
import { useSetFlashData } from "../../../../helpers/helpers";

export default function Cadastrar() {

    
    const { setChamada } = useContextLayout();
    const usuariosSrv = useUsuarioService();
    const [ erro, setErro ] = useState<null|string>(null);
    const router = useRouter();
    
    const usuario = { email: '', senha: '', nome: '', admin: false }

    // =============================================================
    const handleSubmit = async (dados: Usuario) => {
        setErro(null);
        const resposta = await usuariosSrv.cadastrar(dados);

        if (resposta.sucesso) {
            useSetFlashData('sucesso', 'Cadastrdo com sucesso');
            router.push('/admin/usuarios/listar')
        } else {
            //@ts-ignore
            setErro(resposta.erro)
        }

    }
    // =======
    useEffect(() => {
        setChamada("Cadastrar novo usuário");
    }, [])

    // ==============================================================

    return (
        <div className="card">
            <div className="card-header">
                <h5>Cadastro de usuário</h5>

                {erro && <p className="alert alert-danger">{erro}</p>}
            </div>

            <div className="card-block">
                <Formik
                    initialValues={usuario}
                    validationSchema={Yup.object({
                        nome: Yup.string().required('Campo nome é obrigatório'),
                        email: Yup.string().required('Campo email é obrigatório').email('O campo email precisa ser um e-mail válido'),
                        senha: Yup.string().required('Campo senha é obrigatório').min(6, 'A senha precisa ter pelo menos 6 digitos')
                    })}
                    onSubmit={handleSubmit}
                >
                {({errors, touched, isSubmitting}) => (
                    <Form className="form-material">
                        {/* NOME */}
                        <div className="form-group form-static-label">
                            <Field type="text" name="nome" className="form-control" />
                            <span className="form-bar"></span>
                            <label className="float-label">Nome:</label>
                            <ErrorMessage name="nome" />
                        </div>

                        {/* EMAIL */}
                        <div className="form-group form-static-label">
                            <Field type="email" name="email" className="form-control" />
                            <span className="form-bar"></span>
                            <label className="float-label">Email:</label>
                            <ErrorMessage name="email" />
                        </div>

                        {/* SENHA */}
                        <div className="form-group form-static-label">
                            <Field type="password" name="senha" className="form-control" />
                            <span className="form-bar"></span>
                            <label className="float-label">Senha:</label>
                            <ErrorMessage name="senha" />
                        </div>

                        {/* ADMIN */}
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Administrador</label>
                            <div className="col-sm-10">
                                <Field as="select" name="select" className="form-control">
                                    <option value="true">Sim</option>
                                    <option value="false">Não</option>
                                </Field>
                            </div>
                        </div>
                        { isSubmitting && <p>Enviando...</p>}
                        {!isSubmitting && <button type="submit" className="btn btn-success btn-md btn-block waves-effect waves-light text-center m-b-20"  disabled={isSubmitting}>Salvar</button>}
                    </Form>
                )}
                </Formik>
            </div>

        </div>
    )
}