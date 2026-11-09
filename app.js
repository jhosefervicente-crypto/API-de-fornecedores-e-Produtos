import express from "express";
import conexao from "./database/conexao.js";
import produtoRoutes from "./routes/produtoRoutes.js"
import fornecedorRoutes from "./routes/fornecedorRoutes.js"

const app = express();

app.use(express.json());
app.use("/produto", produtoRoutes);
app.use("/fornecedor", fornecedorRoutes);

async function iniciarServidor() {
    try {
        await conexao.execute("SELECT 1");
        console.log("Banco de dados conectado");

        app.listen(process.env.PORT, () => {
            console.log(
                "API executando em http://localhost:" + process.env.PORT
            );
        });
    } catch (erro) {
        console.log("Não foi possivel conectar ao banco de dados");
    }
}