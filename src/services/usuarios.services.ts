import { throws } from "assert";
import { APIConfig } from "../config/api"
import { Usuario } from "../model/usuario";


const UsuariosService = {

    //Realiza o login do usuário
    login: async(email:string, senha:string): Promise<{sucesso: boolean}> => {
        try {
            const response =  await fetch(`${APIConfig.API_URL}/usuarios/login`, {
                method: 'POST',
                body: JSON.stringify({email, senha}),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
              const dados = await response.json();
              console.log(dados);
              //Login ou senha incorreta
              if (dados.statusCode == 401) return {sucesso: false}
              
              console.log(dados.usuario);
              if (dados.usuario.admin) {
                    sessionStorage.setItem("jwt", dados.jwt)
                    sessionStorage.setItem("usuario", JSON.stringify(dados.usuario))
                  return { sucesso: true}
              } 
              return { sucesso: false}
        } catch(erro) {
            return {sucesso: false}
        }
    },

    //Remove os dados do usuário logado
    logout: () => {
        sessionStorage.clear()
    },

    //Busca os usuários cadastrados
    buscar: async (): Promise<{sucesso: boolean, usuarios?:any[]}> => {
        try {
            const response =  await fetch(`${APIConfig.API_URL}/usuarios`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${sessionStorage.getItem('jwt')}`
                }
              })
              const dados = await response.json();
              console.log(response.status);          
              return { sucesso: true, usuarios: dados}
        } catch(erro) {
            return {sucesso: false}
        }
    },

    //Remove o usuário
    excluir: async (id: number): Promise<{sucesso: boolean}> => {
        try {
            const response = await fetch(`${APIConfig.API_URL}/usuarios/${id}`, {
                method: 'DELETE', 
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('jwt')}`
                }
            })
            return { sucesso: response.status == 200 };
        } catch (erro) {
            return { sucesso: false};
        }
    },

    //Realiza o cadastro do usuário
    cadastrar: async (usuario:Usuario): Promise<{sucesso: boolean, erro?: string}> => {
        try {
            const response = await fetch(`${APIConfig.API_URL}/usuarios/admin`, {
                method: 'POST',
                body: JSON.stringify(usuario),
                headers: {
                    'Content-Type': 'Application/json',
                    'Authorization': `Bearer ${sessionStorage.getItem('jwt')}`
                }
            }).then(async response => { 
                if (!response.ok) throw new Error(await response.text())  
                return response;
            })
            
            return { sucesso: response.status == 201 }
        } catch (erro:any) {
            erro = JSON.parse(erro.message);
            return { sucesso: false, erro: erro.message }
        }
    },

    //Retorna o usuário logado
    getUsuarioLogado: (): null|{  nome:string, email:string }  => {
        const usuario = sessionStorage.getItem("usuario");
        return (usuario ? JSON.parse(usuario) : null);
    }
}

export const useUsuarioService = () => UsuariosService;