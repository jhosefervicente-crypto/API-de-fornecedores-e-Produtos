import { Connection } from "mysql2";
import conexao from "../database/conexao.js";

export async function cadastrarP(produto) {
    const sql = "INSER INTO produto (descricao, preco, peso) VALUES (?, ?, ?)";
    const [resultado] = await conexao.execute(sql, [
        produto.descricao,
        produto.preco,
        produto.peso
    ]);

    return resultado.insertId;
};

export async function listaP() {
    const sql = "SELECT * FROM produto ORDER BY id_produto";
    const [linhas] = await conexao.execute(sql);

    return linhas;
};

export async function buscarPorIdP(id) {
    const sql = "SELECT * FROM amostra WHERE id_amostra = ?";
    const [linhas] = await conexao.execute(sql, [id]);

    return linhas
}