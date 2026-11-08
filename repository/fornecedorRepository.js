import conexao from "../database/conexao.js";

export async function cadastrarFornecedor(fornecedor) {
    const sql = 'INSERT INTO fornecedor (nome, cnpj) values (?,?)';

    const resultado = await conexao.execute(sql, [
        fornecedor.nome, 
        fornecedor.cnpj
    ]);

    return resultado.insertID
};

export async function listarFornecedor() {
    const sql = 'SELECT * FROM fornecedor ORDER BY id_fornecedor';
    const [resultado] = await conexao.execute(sql);

    return resultado;
};

export async function BuscarPorIdFornecedor(id) {
    const sql = 'SELECT * FROM fornecedor WHERE id_fornecedor';
    const [resultado] = await conexao.execute(sql, [id]);

    return resultado[0];
};

export async function deletarFornecedor(id) {
    const sql = 'DELETE FROM fornecedor WHERE id_fornecedor = ?'
    const [resultado] = await conexao.execute(sql,[id]);

    return resultado.affectedRows;
};

export async function atualizarFornecedor(id, fornecedor) {
    const sql = 'UPDATE fornecedor SET nome = ? cnpj = ? WHERE id_fornecedor = ?'

    const [resultado] = await conexao.execute(sql, [
        fornecedor.nome,
        fornecedor.cnpj,
        id
    ]);

    return resultado.affectedRows;
};