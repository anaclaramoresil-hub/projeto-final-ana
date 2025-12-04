
import { Cliente } from "../../../database/table";
import { redirect } from "next/navigation";

async function EditaCliente(formData) {
    'use server';

    const id = formData.get('id');
    const nome = formData.get('nome');
    const telefone = formData.get('telefone');
    const endereco = formData.get('endereco');
    const email = formData.get('email');

    const cliente = await Cliente.findByPk(id);
    cliente.Nome = nome;
    cliente.Telefone = telefone;
    cliente.Endereco = endereco;
    cliente.Email = email;

    await cliente.save();
    redirect('/Cliente');
}


async function TelaEditaCliente({ searchParams }) {
    const id = searchParams.id;
    const cliente = await Cliente.findByPk(id);
    return (
        <>
            <h1>Editando o Cliente</h1>
            <form action={EditaCliente}>
                <input type="hidden" name="id" defaultValue={cliente.id} />

                <label htmlFor="Nome">Nome</label> <br></br>
                <input type="text" name="nome" defaultValue={cliente.Nome} /> <br></br>

                <label htmlFor="Telefone">Telefone</label> <br></br>
                <input type="text" name="telefone" defaultValue={cliente.Telefone}></input> <br></br>

                <label htmlFor="Endereco">Endereço</label> <br></br>
                <input type="text" name="endereco" defaultValue={cliente.Endereco}></input> <br></br>

                <label htmlFor="Email">Email</label> <br></br>
                <input type="text" name="email" defaultValue={cliente.Email}></input> <br></br>

                <button>Salvar</button>
            </form>
        </>
    );

}

export default TelaEditaCliente;