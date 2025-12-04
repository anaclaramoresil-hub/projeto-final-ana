import { Categoria } from "../../../database/table";
import { redirect } from 'next/navigation';

async function InsereCategoria(formData) {
    'use server';
    const dados = {
        Especificacao: formData.get('especificacao')
    };
    await Categoria.create(dados);
    redirect('/Categoria');
}


function TelaNovoCategoria(){
    return(
       <form action= {InsereCategoria}>

        <label htmlFor="Especificacao">Especificacao - Roupa ou Suplemento</label> <br></br>
        <input type="text" name="especificacao"></input>
        <button>Inserir Categoria</button>
       </form>
    );
}

export default TelaNovoCategoria;