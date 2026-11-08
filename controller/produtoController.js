import { json } from "express";
import { Produto } from "../model/Produto.js";

import { 
    cadastrarProduto,
    listaProduto,
    buscarPorIdProduto,
    atualizarProduto,
    deletarProduto
} from "../repository/produtoRepository.js";

export async function criarProduto(req, res) {
    try {
        const {descricao, preco, peso} = req.body;

        if (!preco || !peso) {
            return res.status(400).json({
                mensagem: "preco e peso são obrigatórios"
            });
        };

        const produto = new Produto(descricao, preco, peso);
        const id = await cadastrarProduto(produto);

        return res.status(201).json({
            id_produto: id, 
            produto
        });
    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao cadastrar produto"
        });
    };
};

export async function listarTodosProdutos(req, res) {
    try {
        const produtos = await listaProduto();
        
        return res.status(200).json({produtos})
    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao listar todos os produtos"
        });
    }
}

export async function buscarProduto(req, res) {
    try {
        const produto = await buscarPorIdProduto(req.params.id);

        if (!produto) {
            return res.status(404).json({
                mensagem: "Produto não encontrado"
            });
        };

        return res.status(200).json(produto);
    } catch {(erro)
        return res.status(500).json({
            mensagem: "Error ao buscar produto"
        });
    }
}

export async function editarProduto(req, res) {
    try {
        const { descricao, preco, peso } = req.body;

        if (!preco || !peso) {
            return res.status(400).json({
                mensagem: "preco e descricao são obrigatórios"
            });
        };

        const produto = new Produto(descricao, preco, peso);
        const linhasAlteradas = await atualizarProduto(req.params.id, produto);

        if (linhasAlteradas === 0) {
            return res.status(404).json({
                mensagem: "produto não encotrado"
            });
        }

        return res.status(200).json({
            mensagem: "Produto atualizado com sucesso"
        });
    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao atualizar Produto"
        });
    };
};

export async function removerProduto(req, res) {
    try {
        const linhasExcluidas = await deletarProduto(req.params.id);

        if (linhasExcluidas === 0) {
            return res.status(404).json({
                mensagem: "Produto não encontrado"
            });
        };

        return res.status(204).send();
    } catch (erro){
        return res.status(500).json({
            mensagem: "Erro ao excluir produto"
        });
    }
}