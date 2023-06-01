export type Usuario = {
    id?:number,
    email: string,
    nome?: string,
    admin?: boolean,
    jwt?: string 
}