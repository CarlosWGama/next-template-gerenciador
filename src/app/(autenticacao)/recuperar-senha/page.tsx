"use client";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

export default function RecuperarSenha() {

    const [ erro, setErro ] = useState('');

    // ===========================================================
    const handleSubmit = async () => {
        setErro('Falha ao recuperar senha');

    }
    // ===========================================================
    return (
        <div>
            <div className="card-block">
            <div className="row m-b-20">
                <div className="col-md-12">
                    <h3 className="text-center">Recuperar Senha</h3>
                </div>
            </div>

            {/* MENSAGEM DE ERRO */}
            {erro && <p className="alert alert-danger">{erro}</p>}

            {/* FORMULARIO */}
            <Formik
                initialValues={{email: ''}}
                onSubmit={handleSubmit}
                validationSchema={Yup.object({
                    email: Yup.string().required('Campo obrigatório').email('Campo precisa ser um email')
                })}
            >
                {({handleChange, handleSubmit, errors, handleBlur, touched, isSubmitting}) => (
                    <Form>
                        <div className="form-group form-primary">
                            <Field type="email" name="email" className="form-control" />
                            <span className="form-bar"></span>
                            <label className="float-label">Informe seu email</label>
                            <ErrorMessage name="email" />
                        </div>
                
                    
                        <div className="row m-t-30">
                            <div className="col-md-12">
                                <button className="btn btn-primary btn-md btn-block waves-effect waves-light text-center m-b-20" disabled={isSubmitting}>Logar</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>

            <div className="row m-t-25 text-left">
                <div className="col-12">
                    <div className="forgot-phone text-left f-left">
                        <Link href="/login"  className="text-right f-w-600">Voltar tela de login</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    ) 
}