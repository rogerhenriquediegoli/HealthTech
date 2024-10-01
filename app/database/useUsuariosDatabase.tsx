import { useSQLiteContext } from "expo-sqlite";

export type Usuario = {
    idUsuario: number
    nomeCompleto: string
    email: string
    senha: string
    cep: string
    endereco: string
    numero: string
    complemento: string
    telefone: string
}

export function useUsuariosDatabase(){
    //Contexto de conexão com o banco
    const database = useSQLiteContext()

    async function listar() {
        try {
            const resultado = await database.getAllAsync<Usuario>("SELECT * FROM usuarios;")
            return resultado
        }catch(error){
            throw error
        }
    }

    async function inserir(usuario: Usuario){
        try {
            await database.execAsync(`INSERT INTO usuarios (nomeCompleto, email, senha, cep, endereco, numero, complemento, telefone) VALUES ('${usuario.nomeCompleto}', '${usuario.email}', '${usuario.senha}', '${usuario.cep}', '${usuario.endereco}', '${usuario.numero}', '${usuario.complemento}', '${usuario.telefone}')`)
            return true
        }catch(error){
            throw error
        }
    }

    async function excluir(id: number){
        try {
            await database.execAsync(`DELETE FROM usuarios WHERE id = ${id}`)
            return true
        }catch(error){
            throw error
        }
    }

    async function atualizar(id: number, nome: string, preco: number){
        try {
            await database.execAsync(`UPDATE produto SET nome = '${nome}', preco = ${preco} WHERE id = ${id}`)
            return true
        }catch(error){
            throw error
        }
    }

    async function buscaProdutoID(id: number){
        try {
            const query = "SELECT * FROM usuarios WHERE id = ?"
            const resultado = await database.getFirstAsync<Usuario>(query, id)
            return resultado
        
        }catch(error){
            throw error
        }
    }

    async function login(email: string, senha: string){
        try {
            const query = "SELECT idUsuario FROM usuarios WHERE email = ? AND senha = ?"
            const resultado = await database.getFirstAsync<Usuario>(query, email, senha)
            if(resultado){
                return true
            }
            return false
        }catch(error){
            throw error
        }
    }

    return { listar, inserir, excluir, atualizar, buscaProdutoID, login}

}