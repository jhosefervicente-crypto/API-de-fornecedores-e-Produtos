import { Router } from "express";
import {
    criarProduto,
    listarTodosProdutos,
    buscarProduto,
    editarProduto,
    removerProduto
} from "../controller/produtoController.js";

const router = Router();

router.post("/", criarProduto);
router.get("/", listarTodosProdutos);
router.get("/:id", buscarProduto);
router.put("/:id", editarProduto);
router.delete("/:id", removerProduto);

export default router;