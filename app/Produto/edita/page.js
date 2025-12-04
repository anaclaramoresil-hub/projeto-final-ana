import { Produto } from "../../../database/table";
import { redirect } from "next/navigation";

async function EditaProduto(formData) {
    'use server';

    const id = formData.get('id');
    const nome = formData.get('nome');
    const estoque = formData.get('estoque');
    const descricao = formData.get('descricao');
    const preco = formData.get('preco');

    const produto = await Produto.findByPk(id);
    produto.Nome = nome;
    produto.Estoque = estoque;
    produto.Descricao = descricao;
    produto.Preco = preco;

    await produto.save();
    redirect('/Produto');
}


async function TelaEditaProduto({ searchParams }) {
    const id = searchParams.id;
    const produto = await Produto.findByPk(id);
    return (
        <>
            <h1>Editando o Produto</h1>
            <form action={EditaProduto}>
                <input type="hidden" name="id" defaultValue={produto.id} />

                <label htmlFor="Nome">Nome</label> <br></br>
                <input type="text" name="nome" defaultValue={produto.Nome} /> <br></br>

                <label htmlFor="Estoque">Estoque</label> <br></br>
                <input type="text" name="estoque" defaultValue={produto.Estoque}></input> <br></br>

                <label htmlFor="Descricao">Descricao</label> <br></br>
                <input type="text" name="descricao" defaultValue={produto.Descricao}></input> <br></br>

                <label htmlFor="Preco">Preco</label> <br></br>
                <input type="text" name="preco" defaultValue={produto.Preco}></input> <br></br>

                <button>Salvar</button>
            </form>
        </>
    );

}

export default TelaEditaProduto;