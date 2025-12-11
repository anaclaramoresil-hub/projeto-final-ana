import { Categoria } from "../../../database/table";
import { redirect } from "next/navigation";
import "../../css/cadastro.css";

async function EditaCategoria(formData) {
    'use server';

    const id = formData.get('id');
    const especificacao_ = formData.get('especificacao');

    const categoria = await Categoria.findByPk(id);
    categoria.Especificacao = especificacao_;


    await categoria.save();
    redirect('/Categoria');
}

async function TelaEditaCategoria({ searchParams }) {
    const id = searchParams.id;
    const categoria = await Categoria.findByPk(id);
    return (
        <div>
            <h1>Editando a Categoria</h1>
            <form action={EditaCategoria}>
                <input type="hidden" name="id" defaultValue={categoria.id} />

                <label htmlFor="Espeficicacao">Especificacao</label> <br></br>
                <input type="text" name="especificacao" defaultValue={categoria.Especificacao} /> <br></br>

        

                <button>Salvar</button>
            </form>
        </div>
    );

}

export default TelaEditaCategoria;