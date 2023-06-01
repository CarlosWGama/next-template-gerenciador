"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as Yup from 'yup';
import { useState } from 'react';
import { useUsuarioService } from "../../../services/usuarios.services";
import dynamic from "next/dynamic";

export function Login() {

    const router = useRouter();
    const [ erroLogin, setErroLogin ] = useState('');
    const usuarioSrv = useUsuarioService();

    //==================================================================
    const handleSubmit = async ({email, senha}:any) => {
        setErroLogin('');
        const resposta = await usuarioSrv.login(email, senha);
        if (resposta.sucesso) {
            //router.push('/admin/dashboard')
            //Força recarregar a página com seus scripts 
            window.location.href='/admin/dashboard'; 
        } else {
            setErroLogin('Email ou senha incorreta!');
        }

    }

    //===================================================================
    return (
        
        <div className="card-block">
            <div className="row m-b-20">
                <div className="col-md-12">
                    <h3 className="text-center">Administrativo</h3>
                </div>
            </div>

            <Formik
                initialValues={{email: '', senha: ''}}
                validationSchema={Yup.object({
                    email: Yup.string().required('Campo email é obrigatório').email('O campo email precisa ser um e-mail válido'),
                    senha: Yup.string().required('O campo senha é obrigatório').min(6, 'A senha precisa ter pelo menos 6 digitos')
                })}
                onSubmit={handleSubmit}
            >
            {({errors, touched, isSubmitting}) => (
                <Form>
                    {erroLogin && <p className="alert alert-danger">{erroLogin}</p>}
                    <div className="form-group form-primary" >
                        <Field type="email" name="email" className="form-control" placeholder="Digite seu email"/>
                        <span className="form-bar" />                     
                        <ErrorMessage name="email" />
                    </div>
                    <div className="form-group form-primary">
                        <Field type="password" name="senha" className="form-control" placeholder="Digite sua senha"/>
                        <span className="form-bar" />
                        <ErrorMessage name="senha" />
                    </div>

                    <div className="row m-t-25 text-left">
                        <div className="col-12">
                            <div className="forgot-phone text-right f-right">
                                <Link href="/recuperar-senha" className="text-right f-w-600">Esqueceu sua senha?</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-30">
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-primary btn-md btn-block waves-effect waves-light text-center m-b-20" style={isSubmitting ? {backgroundColor: 'grey'} : {}}  disabled={isSubmitting}>Logar</button>
                        </div>
                    </div>
                </Form>
            )}
            </Formik>
        </div>
        
    ) 
}

export default dynamic(() => Promise.resolve(Login), {ssr: false });