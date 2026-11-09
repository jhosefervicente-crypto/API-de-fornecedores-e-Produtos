import { Router } from "express";
import {
    criarFornecedor,
    listarTodosFornecedor,
    buscarFornecedor,
    editarFornecedor,
    removerFornecedor
} from "../controller/fornecedorController.js";

const router = Router();

router.post("/", criarFornecedor);
router.get("/", listarTodosFornecedor);
router.get("/:id", buscarFornecedor);
router.put("/:id", editarFornecedor);
router.delete("/:id", removerFornecedor);

export default router;