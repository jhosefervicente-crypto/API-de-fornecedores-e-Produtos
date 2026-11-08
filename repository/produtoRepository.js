import { Connection } from "mysql2";
import conexao from "../database/conexao.js";

export async function cadastrarProduto(produto) {
    const sql = "INSER INTO produto (descricao, preco, peso) VALUES (?, ?, ?)";
    const [resultado] = await conexao.execute(sql, [
        produto.descricao,
        produto.preco,
        produto.peso
    ]);

    return resultado.insertId;
};

export async function listaProduto() {
    const sql = "SELECT * FROM produto ORDER BY id_produto";
    const [resultado] = await conexao.execute(sql);

    return resultado;
};

export async function buscarPorIdProduto(id) {
    const sql = "SELECT * FROM amostra WHERE id_amostra = ?";
    const [resultado] = await conexao.execute(sql, [id]);

    return resultado;
};

export async function deletarProduto(id) {
    const sql = 'DELETE FROM produto WHERE id_produto = ?';

    const [resultado] = await conexao.execute(sql, [id]);

    return resultado.affectedRows;
};

export async function atualizarProduto(id, produto) {
    const sql = "UPDATE produto SET descricao = ?, preco = ?, peso = ?  WHERE id_produto = ?";

    const [resultado] = await conexao.execute(sql, [
        produto.descricao,
        produto.preco,
        produto.peso,
        id
    ]);

    return resultado.affectedRows;
}