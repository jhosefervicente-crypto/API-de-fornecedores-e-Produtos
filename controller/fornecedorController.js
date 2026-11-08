import { json } from "express";
import { Fornecedor } from "../model/Fornecedor.js";

import { 
    cadastrarFornecedor,
    listaFornecedor,
    buscarPorIdFornecedor,
    atualizarFornecedor,
    deletarFornecedor
} from "../repository/fornecedorRepository.js";

export async function criarFornecedor(req, res) {
    try {
        const {nome, cnpj} = req.body;

        if (!nome || !cnpj) {
            return res.status(400).json({
                mensagem: "preco e peso são obrigatórios"
            });
        };

        const fornecedor = new Fornecedor(nome, cnpj);
        const id = await cadastrarFornecedor(Fornecedor);

        return res.status(201).json({
            id_Fornecedor: id, 
            fornecedor
        });
    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao cadastrar fornecedor"
        });
    };
};

export async function listarTodosFornecedor(req, res) {
    try {
        const fornecedor = await listaFornecedor();
        
        return res.status(200).json({fornecedor})
    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao listar todos os fornecedores"
        });
    }
}

export async function buscarFornecedor(req, res) {
    try {
        const fornecedor = await buscarPorIdFornecedor(req.params.id);

        if (!fornecedor) {
            return res.status(404).json({
                mensagem: "Fornecedor não encontrado"
            });
        };

        return res.status(200).json(fornecedor);
    } catch {(erro)
        return res.status(500).json({
            mensagem: "Error ao buscar fornecedor"
        });
    }
}

export async function editarFornecedor(req, res) {
    try {
        const { nome, cnpj } = req.body;

        if (!preco || peso) {
            return res.status(400).json({
                mensagem: "nome e cnpj são obrigatórios"
            });
        };

        const Fornecedor = new Fornecedor(nome, cnpj);
        const linhasAlteradas = await atualizarFornecedor(req.params.id, Fornecedor);

        if (linhasAlteradas === 0) {
            return res.status(404).json({
                mensagem: "Fornecedor não encotrado"
            });
        };

        return res.status(200).json({
            mensagem: "Fornecedor atualizado com sucesso"
        });
    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao atualizar fornecedor"
        });
    };
};

export async function removerFornecedor(req, res) {
    try {
        const linhasExcluidas = await deletarFornecedor(req.params.id);

        if (linhasExcluidas === 0) {
            return res.status(404).json({
                mensagem: "Fornecedor não encontrado"
            });
        };

        return res.status(204).send();
    } catch (erro){
        return res.status(500).json({
            mensagem: "Erro ao excluir fornecedor"
        });
    };
};